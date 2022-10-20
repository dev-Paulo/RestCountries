import "../styles/global.css";
import "../styles/homecountries.css";

import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar/navbar";
import SelectByRegion from "../components/SelectByRegion/select-by-region";
import { CountriesModel } from "../model/CountriesModel";
import ReactPaginate from "react-paginate";
import { Link, useNavigate } from "react-router-dom";
import searchIcon from "../assets/images/search-icon.svg";

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
    console.log(selectedRegion);
  }

  useEffect(() => {
    if (selectedRegion == "all") {
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
        console.log(response);
      });
  }

  const displayCountries = countries
    ?.filter((country) => {
      return search.toLowerCase() === ""
        ? country
        : country?.name?.common?.toLowerCase().includes(search);
    })
    .map((country: CountriesModel, index) => {
      return (
        <Link
          to="/country-details"
          key={index}
          className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          onClick={(e: any) => {
            // navigate("/country-details");
            localStorage.setItem("country", JSON.stringify(country));
            console.log(localStorage.getItem("country"));
          }}
        >
          <img
            className="rounded-t-lg country-flag aspect-video"
            src={country?.flags?.png}
            alt=""
          ></img>
          <div className="p-5">
            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {country?.name?.common}
            </h5>
            <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
              <span className="font-bold text-gray-700 dark:text-gray-400">
                Population:{" "}
              </span>
              {country?.population?.toLocaleString("pt-BR")}
            </p>
            <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
              <span className="font-bold text-gray-700 dark:text-gray-400">
                Region:{" "}
              </span>
              {country.region}
            </p>
            <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
              <span className="font-bold text-gray-700 dark:text-gray-400">
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
    console.log(selected);
  };

  return (
    <>
      <div className="body-countries bg-slate-200">
        <Navbar />
        <div className="conteudo-countries container mx-auto flex py-10 px-10 justify-center ">
          <div className="items-center justify-between grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 ">
            <div className="search-field flex flex-wrap mb-4 relative h-15 bg-white items-center rounded pr-10">
              <div className="flex -mr-px justify-center w-15 p-4">
                <img src={searchIcon} alt="search icon" id="search-icon"></img>
              </div>
              <input
                type="text"
                className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center text-xl outline-none"
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

            <div className="select-region">
              <SelectByRegion
                region={selectedRegion}
                setSelectedRegion={setSelectedRegion}
              />
            </div>
          </div>

          <div className="container grid mx-auto lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6 py-10">
            {displayCountries?.slice(
              pagesVisited,
              pagesVisited + countriesPerPage
            )}
          </div>

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
        </div>
      </div>
    </>
  );
}

export default HomeCountries;
