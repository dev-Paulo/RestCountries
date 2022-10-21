import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar/navbar";

import backButton from "../assets/images/arrow-left-solid.svg";

import "../styles/country-details.css";

export function CountryDetails() {

  // const {countryName} = useParams();

  let selectedCountry = JSON.parse(localStorage.getItem("country")!);

  let languages: Array<any> = Object.values(selectedCountry.languages);
  let currencies: Array<any> = Object.values(selectedCountry.currencies);
  let borders: Array<any> | null = selectedCountry?.borders ? Object?.values(selectedCountry?.borders) : null;
  // let borders: Array<any> = []

  //  function getCountryBorders() {
  //   return  borders =  Object.values(selectedCountry.borders);
  // }

  // useEffect(() => {   
  //       getCountryBorders();    
  // }, [selectedCountry])


  const navigate = useNavigate();

  return (
    <>
      <div className="body-details dark:bg-slate-900">
        <Navbar />

        <div className="conteudo-details justify-center container mx-auto flex py-10 px-10 ">
          <div className="back-btn">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" onClick={() => {
                localStorage.clear();
                navigate("/home")
            }}>
            <img src={backButton} id="backbtn-icon" ></img>
              Voltar
            </button>
          
          </div>

          <div className="grid  lg:grid-cols-2 md:grid-cols-2 gap-16 py-10">
            <div className="country-details-flag">
              <img
                className="flag aspect-video"
                src={selectedCountry.flags.svg}
                alt="Country flag"
              ></img>
            </div>

            <div className="details py-10">
              <h1 id="country-name-title" className="text-3xl font-bold dark:text-white">
                {selectedCountry.name.common}
              </h1>

              <div className="country-details-list grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-6 dark:text-white">
                <ul>
                  <li>
                    <span>Oficial Name: </span>
                    {selectedCountry.name.official}
                  </li>
                  <li>
                    <span>Population: </span>
                    {selectedCountry.population.toLocaleString("pt-BR")}
                  </li>
                  <li>
                    <span>Region: </span>
                    {selectedCountry.region}
                  </li>
                  <li>
                    <span>Sub Region: </span>
                    {selectedCountry.subregion}
                  </li>
                  <li>
                    <span>Capital: </span>
                    {selectedCountry.capital}
                  </li>
                </ul>

                <ul>
                  <li>
                    <span>Top Level Domain: </span>
                    {selectedCountry.tld}
                  </li>
                  <li>
                    <span>Currencies: </span>
                    {currencies.map((currencie: any, index: any) => {
                      return (
                        <React.Fragment key={index}>
                          {currencie.name}
                          {index == currencies.length - 1 ? "" : ", "}
                        </React.Fragment>
                      );
                    })}
                  </li>
                  <li>
                    <span>Languages: </span>
                    {languages.map((language: any, index: any) => {
                      return (
                        <React.Fragment key={index}>
                          {language}
                          {index == languages.length - 1 ? "" : ", "}
                        </React.Fragment>
                      );
                    })}
                  </li>
                </ul>
              </div>

              <div className="mt-10 grid lg:grid-cols-2 md:grid-cols-2 gap-2 py-10 items-center">
                <div>
                  <h1 id="border-countries-title" className="text-2xl font-bold dark:text-white">
                    Border Countries: 
                  </h1>
                </div>
                <div>
                {
                selectedCountry?.borders ? 
                borders?.map((border: any, index: any) => {
                      return (
                        <button key={index} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                          {border}
                          {index == border.length - 1 ? "" : ", "}
                        </button>
                      );
                    }) : <h1>Nada aqui</h1>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
