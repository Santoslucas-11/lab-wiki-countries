import "./App.css";
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import countries from './countries.json';
import React, { useState, useEffect } from "react";
import axios from 'axios';
const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function App() {

  const [countriesList, setCountriesList] = useState(countries);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setCountriesList(response.data);
      // setFetching(false);
    });
  }, []);


  return (
    <div className="App">
      <Navbar />
      <div className="container">
      <CountriesList countriesList={countriesList} />
      <Routes>
        <Route path="/countries/:alpha3Code" element={<CountryDetails />} />
      </Routes>
      </div> 

    </div>
  );
}



export default App;