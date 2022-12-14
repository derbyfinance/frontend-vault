import React from 'react';
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LineElement,
  LinearScale,
  PointElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, Filler, LinearScale, PointElement, LineElement);

const PerformanceGraph = ({ chartData }) => {
  chartData = {
    labels: ['OCT 14', 'OCT 16', 'OCT 18', 'OCT 20', 'OCT 22', 'OCT 24'],
    datasets: [
      {
        label: 'Performance',
        data: [0, 10, 5, 2, 20, 30, 100],
        backgroundColor: '#a02bbd',
        borderColor: '#a02bbd',
        fill: true,
        lineTension: 0.5,
        tension: 0.1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },

    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
  };
  return (
    <>
      <Line data={chartData} options={options}></Line>
    </>
  );
};

export default PerformanceGraph;
