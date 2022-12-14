import React from 'react';
import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const PerformanceGraph = () => {
  const data = {
    labels: ['OCT 14', 'OCT 16', 'OCT 18', 'OCT 20', 'OCT 22', 'OCT 24'],
    datasets: [
      {
        label: 'Performance',
        data: [0, 10, 5, 2, 20, 30, 45],
        fill: true,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
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
      <Line data={data} options={options}></Line>
    </>
  );
};

export default PerformanceGraph;
