import React, { useContext, useEffect, useState } from "react";
import { RouteProps, useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar/navbar";

import backButton from "../assets/images/arrow-left-solid.svg";

import "../styles/country-details.css";
import getCountryBorders from "../utils/getCountryBorders";
import getCountryByName from "../utils/getCountryByName";
import { ThemeContext } from "../hooks/useTheme";
import { MdArrowBack } from "react-icons/md";
import { Col, Row } from "react-bootstrap";

export function CountryDetails() {
  let { theme, setTheme }: any = useContext(ThemeContext);
  const navigate = useNavigate();
  const params: any = useParams();

  // let selectedCountry = JSON.parse(localStorage.getItem("country")!);

  // let currencies: Array<any> = Object.values(selectedCountry.currencies);
  // let borders: Array<any> | null = selectedCountry?.borders
  //   ? Object?.values(selectedCountry?.borders)
  //   : null;
  const [country, setCountry] = useState<any>({});
  const [countryBorders, setCountryBorders] = useState<any>([]);
  const [languages, setLanguages] = useState<any | undefined>([]);
  const [currencies, setCurrencies] = useState<any | undefined>([]);

  async function getCountry() {
    setCountry(await getCountryByName(params?.country));
  }

  async function fetchCountryBorders() {
    if (country?.borders) {
      setCountryBorders(await getCountryBorders(country?.borders));
    }
  }

  useEffect(() => {
    if (country != undefined) {
      if (Object.keys(country).length != 0) {
        setLanguages(Object.values(country?.languages));
        setCurrencies(Object.values(country?.currencies));
        fetchCountryBorders();
      }
    }
  }, [country]);

  useEffect(() => {
    getCountry();
  }, [params]);

  console.log(country);

  return (
    <>
      <div className="body-details dark:bg-slate-900">
        <Navbar />

        <div className="conteudo-details justify-center container mx-auto flex py-10 px-10 ">
          <Row className="mb-5">
            <Col lg={1}>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-3 rounded inline-flex items-center shadow-md"
                onClick={() => {                  
                  navigate("/home");
                }}
              >
                {theme === "light" ? (
                  <div
                    className="flex items-center justify-center"                    
                  >
                    <MdArrowBack size={26} className="cursor-pointer mr-2" />
                    {/* <span className="font-bold">Dark Mode</span> */}
                  </div>
                ) : (
                  <div
                    className="flex items-center justify-center"                    
                  >
                    <MdArrowBack
                      size={26}
                      className="cursor-pointer mr-2"
                      color="white"
                    />
                    {/* <span className="font-bold dark:text-white">Light Mode</span> */}
                  </div>
                )}
                {/* <img src={backButton} id="backbtn-icon"></img> */}
                Voltar
              </button>
            </Col>
          </Row>

          <Row>
            <Col lg={6} xs={12} className="px-6 mb-5">
              <div className="country-details-flag">
                <img
                  className="flag "
                  src={country?.flags?.svg}
                  alt="Country flag"
                ></img>
              </div>
            </Col>

            <Col lg={6} xs={12} className="px-6">
              <Row>
                <h1
                  id="country-name-title"
                  className="text-3xl font-bold dark:text-white"
                >
                  {country?.name?.common}
                </h1>
              </Row>

              <Row>
                <Col className="country-details-list dark:text-white" lg={6} md={6} xs={12}>
                  <ul>
                    <li>
                      <span>Oficial Name: </span>
                      {country?.name?.official}
                    </li>
                    <li>
                      <span>Population: </span>
                      {country?.population?.toLocaleString("pt-BR")}
                    </li>
                    <li>
                      <span>Region: </span>
                      {country?.region}
                    </li>
                    <li>
                      <span>Sub Region: </span>
                      {country?.subregion}
                    </li>
                    <li>
                      <span>Capital: </span>
                      {country?.capital}
                    </li>
                  </ul>
                </Col>
                <Col className="country-details-list dark:text-white" lg={6} md={6} xs={12}>
                  <ul>
                    <li>
                      <span>Top Level Domain: </span>
                      {country?.tld}
                    </li>
                    <li>
                      <span>Currencies: </span>
                      {currencies?.length > 0
                        ? currencies?.map((currencie: any, index: any) => {
                            return (
                              <React.Fragment key={index}>
                                {currencie.name}
                                {index == currencies.length - 1 ? "" : ", "}
                              </React.Fragment>
                            );
                          })
                        : ""}
                    </li>
                    <li>
                      <span>Languages: </span>
                      {languages?.length > 0
                        ? languages?.map((language: any, index: any) => {
                            return (
                              <React.Fragment key={index}>
                                {language}
                                {index == languages.length - 1 ? "" : ", "}
                              </React.Fragment>
                            );
                          })
                        : ""}
                    </li>
                  </ul>
                </Col>
              </Row>

              <Row className="mt-5">
                <div>
                  <h1
                    id="border-countries-title"
                    className="text-2xl font-bold dark:text-white"
                  >
                    Border Countries:
                  </h1>
                </div>

                <Row>
                  <Col xs={12}>
                    <div>
                    {country?.borders ? (
                      countryBorders?.map((border: any, index: any) => {
                        return (
                          <button
                            key={index}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center mr-3 mt-4"
                            onClick={() => {
                              navigate(`/country-details/${border}`);
                            }}
                          >
                            {border}
                          </button>
                        );
                      })
                    ) : (
                      <h1 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center mr-2 mt-2">No borders</h1>
                    )}
                    </div>
                  </Col>
                </Row>
              </Row>             
            </Col>
          </Row>

          {/* <div className="grid  lg:grid-cols-2 md:grid-cols-2 gap-16 py-10">
             <div className="country-details-flag">
              <img
                className="flag aspect-video"
                src={country?.flags?.svg}
                alt="Country flag"
              ></img>
            </div> 

            <div className="details py-10">
              <h1
                id="country-name-title"
                className="text-3xl font-bold dark:text-white"
              >
                {country?.name?.common}
              </h1>

              <div className="country-details-list grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-6 dark:text-white">
                <ul>
                  <li>
                    <span>Oficial Name: </span>
                    {country?.name?.official}
                  </li>
                  <li>
                    <span>Population: </span>
                    {country?.population?.toLocaleString("pt-BR")}
                  </li>
                  <li>
                    <span>Region: </span>
                    {country?.region}
                  </li>
                  <li>
                    <span>Sub Region: </span>
                    {country?.subregion}
                  </li>
                  <li>
                    <span>Capital: </span>
                    {country?.capital}
                  </li>
                </ul>

                <ul>
                  <li>
                    <span>Top Level Domain: </span>
                    {country?.tld}
                  </li>
                  <li>
                    <span>Currencies: </span>
                    {currencies?.length > 0
                      ? currencies?.map((currencie: any, index: any) => {
                          return (
                            <React.Fragment key={index}>
                              {currencie.name}
                              {index == currencies.length - 1 ? "" : ", "}
                            </React.Fragment>
                          );
                        })
                      : ""}
                  </li>
                  <li>
                    <span>Languages: </span>
                    {languages?.length > 0
                      ? languages?.map((language: any, index: any) => {
                          return (
                            <React.Fragment key={index}>
                              {language}
                              {index == languages.length - 1 ? "" : ", "}
                            </React.Fragment>
                          );
                        })
                      : ""}
                  </li>
                </ul>
              </div>

              <div className="mt-10 grid lg:grid-cols-1 md:grid-cols-2 gap-2 py-10 items-center">
                <div>
                  <h1
                    id="border-countries-title"
                    className="text-2xl font-bold dark:text-white"
                  >
                    Border Countries:
                  </h1>
                </div>
                <div>
                  {country?.borders ? (
                    countryBorders?.map((border: any, index: any) => {
                      return (
                        <button
                          key={index}
                          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center mr-2 mt-2"
                          onClick={() => {
                            navigate(`/country-details/${border}`);
                          }}
                        >
                          {border}
                        </button>
                      );
                    })
                  ) : (
                    <h1>No borders</h1>
                  )}
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
