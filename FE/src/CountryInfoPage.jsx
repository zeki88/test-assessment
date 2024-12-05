import { useEffect, useState } from 'react';
import BorderCountriesWidget from './BorderCountriesWidget';
import PopulationChart from './PopulationChart';
import { useParams } from "react-router-dom";

export default function CountryInfoPage() {
    const { code } = useParams();
    const [country, setCountry] = useState([]);
    const [borders, setBorders] = useState([]);
    const [population, setPopulation] = useState(null);

    useEffect(() => {
      const fetchCountry = async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/country-info/${code}`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setCountry(data);
          setBorders(data.borders);
          setPopulation(data.population);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchCountry();
    }, [code]);

    return (
        <div className="country-info">
            <div className="country">
            <h1>{country.name}</h1>
            <img src={country.flag} alt={country.name} />
            </div>
            <BorderCountriesWidget borders={borders} />
            <PopulationChart population={population} />
        </div>
    );
}