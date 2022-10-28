import "../styles/global.css";
import "../styles/homecountries.css";

import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar/navbar";
import SelectByRegion from "../components/SelectByRegion/select-by-region";
import { CountriesModel } from "../model/CountriesModel";
import ReactPaginate from "react-paginate";
import { Link, useNavigate } from "react-router-dom";
import searchIcon from "../assets/images/search-icon.svg";
import { Col, Container, Row } from "react-bootstrap";

function HomeCountries() {
  const [countries, setCountries] = useState<CountriesModel[]>([]);
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState<CountriesModel>();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const countriesPerPage = 8;
  const pagesVisited = pageNumber * countriesPerPage;

  useEffect(() => {
    getCountries();
  }, []);

  function getCountries() {
    setIsLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then(async (res) => {
        if (!res.ok) {
          console.log("Error fetching");
          // setLoading(false);
        } else {
          return res.json();
        }
      })
      .then((countries) => {
        setCountries(countries);
        setIsLoading(false);
      });    
  }

  useEffect(() => {
    if (selectedRegion == "") {
      getCountries();
    } else {
      getCountriesByRegion();
    }
  }, [selectedRegion]);

  function getCountriesByRegion() {
    fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`)
      .then(async (res) => {
        if (!res.ok) {
          console.log("Error fetching");
          // setLoading(false);
        } else {
          return res.json();
        }
      })
      .then((response) => {
        setCountries(response);       
      });
  }

  const displayCountries = countries
    ?.filter((country: any) => {
      if (search == "") {
        return country;
      } else if (
        country?.altSpellings?.some((element: any, index: number) => {
          return element?.toLowerCase().includes(search.toLowerCase());
        }) ||
        country?.name.common.toLowerCase().includes(search.toLowerCase()) ||
        Object.values(country?.translations).some((translations: any) => {
          return Object.values(translations).some((translationsValues: any) => {
            return translationsValues
              .toLowerCase()
              .includes(search.toLowerCase());
          });
        })
      ) {
        return country;
      }
    }).map((country: CountriesModel, index) => {
      return (
        <Link
          to={`/country-details/${country?.name?.common}`}
          key={index}
          className="max-w-sm  shadow-md rounded-lg dark:rounded-lg dark:text-white cursor-pointer"      
        >
          <img
            className="rounded-t-lg country-flag aspect-video"
            src={country?.flags?.png}
            alt=""
          ></img>
          <div className="p-4 body-card dark:bg-gray-800 rounded-b-lg">
            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-600 dark:text-gray-100">
              {country?.name?.common}
            </h5>
            <p className="mb-3 font-semibold text-gray-700 dark:text-gray-200">
              <span className="font-bold text-gray-500 dark:text-gray-200">
                Population:{" "}
              </span>
              {country?.population?.toLocaleString("pt-BR")}
            </p>
            <p className="mb-3 font-semibold text-gray-700 dark:text-gray-200">
              <span className="font-bold text-gray-500 dark:text-gray-200">
                Region:{" "}
              </span>
              {country.region}
            </p>
            <p className="mb-3 font-semibold text-gray-700 dark:text-gray-200">
              <span className="font-bold text-gray-500 dark:text-gray-200">
                Capital:{" "}
              </span>
              {country.capital}
            </p>
          </div>
        </Link>
      );
    });

  const pageCount = Math.ceil(displayCountries?.length / countriesPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);    
  };

  return (
    <>
      <div className="body-countries bg-slate-100 dark:bg-slate-900">
        <Navbar />
        <Container className="mx-auto">
          <Row className="justify-content-between d-flex align-items-center mt-4">
            <Col lg={6}>
              <div className="flex h-15 bg-white border border-gray-300 items-center rounded dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <div className="flex -mr-px justify-center w-15 p-4">
                  <img
                    src={searchIcon}
                    alt="search icon"
                    id="search-icon"
                  ></img>
                </div>
                <input
                  type="text"
                  className="flex-auto leading-normal w-full flex-1 h-10 dark:text-gray-500  rounded rounded-l-none px-1 self-center text-xl outline-none"
                  placeholder="Search for a country..."
                  onChange={(e: any) => {
                    setSearch(e.target.value);
                    {
                      if (e.target.value.length > 0) {
                        console.log("entrou pae");
                        changePage({ selected: 0 });
                      }
                    }
                  }}
                />
              </div>
            </Col>
            <Col lg={4} xs={12}>
              <div className="select-region py-4">
                <SelectByRegion
                  region={selectedRegion}
                  setSelectedRegion={setSelectedRegion}
                />
              </div>
            </Col>
          </Row>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 py-10 justify-center">
            {displayCountries?.slice(
              pagesVisited,
              pagesVisited + countriesPerPage
            )}
          </div>
          <Row>
            <Col lg={12}>
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}                
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HomeCountries;
