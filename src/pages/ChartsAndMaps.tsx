import { useState, useEffect, useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router-dom';

// Correct Chart.js registration
ChartJS.register(Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler);

interface CountryData {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
  active: number;
  countryInfo: {
    lat: number;
    long: number;
  };
}

const ChartsAndMaps = () => {
  const [countriesData, setCountriesData] = useState<CountryData[]>([]);

  useEffect(() => {
    // Fetch COVID-19 data and update countriesData state
    fetch('https://disease.sh/v3/covid-19/countries')
      .then(response => response.json())
      .then(data => setCountriesData(data));
  }, []);

  // Placeholder data structure for covidData
  const covidData: any =useLoaderData();

  const graphLabels = Object.keys(covidData.cases);
  const graphData = Object.values(covidData.cases);

  const graphValue = {
    labels: graphLabels,
    datasets: [
      {
        label: "Cases",
        data: graphData,
        backgroundColor: 'yellow',
        borderColor: 'green',
        tension: 0.4,
        fill: true,
        pointStyle: 'rect',
        pointBorderColor: 'blue',
        pointBackgroundColor: '#fff',
        showLine: true
      }
    ]
  };

  const mapContainerProps = useMemo(
    () => ({
      center: { lat: 20, lng: 0 }, 
      zoom: 2,
      style: { width: '70%', height: '426px', margin: '0 auto' },
    }),
    []
  );

  return (
    <div>
      <h1 className='text-3xl flex align-center'>Chart </h1>
      <div className="flex justify-center">
        <div style={{ width: '70%', height: '400px' }}>
          <Line data={graphValue}>Hello</Line>
        </div>
      </div>
      <h1 className='text-3xl flex align-center'>Map </h1>
      <div className='flex justify-center'>
        
      <MapContainer {...mapContainerProps}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {countriesData.map((country) => (
            <Marker
              key={country.country}
              position={[country.countryInfo.lat, country.countryInfo.long]}
            >
              <Popup>
                <div>
                  <h2>{country.country}</h2>
                  <p>Active Cases: {country.active}</p>
                  <p>Recovered: {country.recovered}</p>
                  <p>Deaths: {country.deaths}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default ChartsAndMaps;
