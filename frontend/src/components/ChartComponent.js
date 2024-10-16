import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const ChartComponent = ({ data, type }) => {
  const renderChart = () => {
    switch (type) {
      case 'line':
        return <Line data={data} />;
      case 'bar':
        return <Bar data={data} />;
      case 'pie':
        return <Pie data={data} />;
      default:
        return null;
    }
  };

  return <div className="chart-container">{renderChart()}</div>;
};

export default ChartComponent;
