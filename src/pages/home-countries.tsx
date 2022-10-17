import "../styles/global.css";
import "../styles/homecountries.css";

import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar/navbar";
import { SelectByRegion } from "../components/SelectByRegion/select-by-region";
import { CountriesModel } from "../model/CountriesModel";

function HomeCountries() {
  const [countries, setCountries] = useState<CountriesModel[]>();
  const [search, setSearch] = useState('');

  useEffect(() => {
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
        console.log(countries);
      });
  }, []);

  function handleSearchField(name: string) {

    const result = countries?.filter(country => {
      return country?.name?.common === name;
    });

    setCountries(result);
    console.log(result);
   
  }

  return (
    <>
      <div className="body-countries bg-slate-200">
        <Navbar />
        <div className="conteudo-countries container mx-auto flex py-10 px-10 ">
          <div className="flex items-center justify-between columns-2 ">
            <div className="search-field">
              <input
                type="text"
                id="large-input"
                onChange={(e: any) => {
                  setSearch(e.target.value);
                }}
                placeholder="Search for a country..."
                className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <SelectByRegion />
            </div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 py-10">
            {countries?.filter((country) => {
              return search.toLowerCase() === '' ? country : country?.name?.common?.toLowerCase().includes(search)
            }).map((country: any, index: any) => {
              return (
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" onClick={() => {console.log(country[index])}}>
                  <a href="#">
                    <img
                      className="rounded-t-lg country-flag aspect-video"
                      src={country.flags.png}
                      alt=""
                    ></img>
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {country.name.common}
                      </h5>
                    </a>
                    <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
                      <span className="font-bold text-gray-700 dark:text-gray-400">
                        Population:{" "}
                      </span>
                      {country.population.toLocaleString('pt-BR')}
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCountries;
