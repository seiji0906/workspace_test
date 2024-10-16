import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChartComponent from './components/ChartComponent';

const App = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/data');
        setChartData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Chart.js Graphs</h1>
      {chartData ? (
        <ChartComponent data={chartData} type="line" />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default App;
