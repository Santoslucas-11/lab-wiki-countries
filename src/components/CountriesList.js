import React from 'react'
import { Link } from "react-router-dom";

function CountriesList( { countriesList }) {

    return (
        <div>
      <h1>Countries</h1>
      {countriesList.map((country) => {
        return (
          <div key={country.alpha3Code} className="country">
            <Link to={`/countries/${country.alpha3Code}`}>{country.name.official}</Link>


          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;