import React, { useEffect, useState } from "react";

function SelectByRegion({ region, setSelectedRegion }:{ region: string, setSelectedRegion: Function}) {

  return (
    <>      
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-5 py-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e: any) => {
          setSelectedRegion(e.target.value)          
        }}
      >
        <option value="all">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </>
  );
}

export default SelectByRegion;
