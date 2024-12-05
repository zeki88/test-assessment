const express = require('express');
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
require('dotenv').config();

app.use(cors());
app.use(express.json());
console.log('PORT:', process.env.PORT);

app.get('/api/available-countries', async (req, res) => {
  try {
    const response = await fetch('https://date.nager.at/api/v3/AvailableCountries');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const countries = await response.json();

    const formattedCountries = countries.map(country => ({
      name: country.name,
      code: country.countryCode,
    }));

    res.json(formattedCountries);
  } catch (error) {
    console.error('Error fetching countries:', error.message);
    res.status(500).json({ message: 'Error fetching available countries' });
  }
});

app.get('/api/country-info/:countryCode', async (req, res) => {
  const { countryCode } = req.params;

  try {
    const bordersResponse = await fetch(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
    const bordersData = await bordersResponse.json();

    const populationResponse = await fetch('https://countriesnow.space/api/v0.1/countries/population');
    const populationResult = await populationResponse.json();
    const populationData = populationResult.data.find(
      code => code.country === bordersData.commonName
    );

    const flagResponse = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images');
    const flagResult = await flagResponse.json();
    const flagData = flagResult.data.find(
      country => country.iso2 === countryCode
    );

    const result = {
      name: bordersData.commonName || null,
      region: bordersData.region || null,
      subregion: bordersData.subregion || null,
      borders: bordersData.borders || [],
      population: populationData ? populationData.populationCounts : null,
      flag: flagData ? flagData.flag : null,
    };

    res.json(result);
  } catch (error) {
    console.error('Error fetching country info:', error.message);
    res.status(500).json({ message: 'Error fetching country information' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
