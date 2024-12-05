import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/available-countries');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="App">
      <h1>List of countries</h1>
      <ul>
        {countries.map((country, index) => (
          <Link to={`/country/${country.code}`} key={index}><li >{country.name}</li></Link>
        ))}
      </ul>
    </div>
  );
}

export default App;

