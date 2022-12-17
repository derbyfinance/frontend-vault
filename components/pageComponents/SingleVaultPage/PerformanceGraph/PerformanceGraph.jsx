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
import { useTheme } from 'styled-components';

ChartJS.register(CategoryScale, Filler, LinearScale, PointElement, LineElement);

const mockChartData = {
  D: {
    labels: ['OCT 14', 'OCT 16', 'OCT 18', 'OCT 20', 'OCT 22', 'OCT 24'],
    datasets: [0, 10, 5, 2, 20, 30],
  },
  W: {
    labels: [
      '01/01/2022 - 08/01/2022',
      '08/08/2022 - 15/01/2022',
      '15/01/2022 - 22/01/2022',
      '22/01/2022 - 29/01/2022',
      '29/01/2022 - 05/02/2022',
      '05/02/2022 - 13/02/2022',
    ],
    datasets: [0, 15, 0, 25, 20, 30],
  },
  M: {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'JUN', 'JUL'],
    datasets: [0, 15, 0, 25, 20, 30],
  },
  Y: {
    labels: [2017, 2018, 2019, 2020, 2021, 2022],
    datasets: [0, 30, 15, 8, 21, 30],
  },
  All: {
    labels: [2017, 2018, 2019, 2020, 2021, 2022],
    datasets: [0, 30, 15, 8, 21, 30],
  },
};

const PerformanceGraph = ({ chartView }) => {
  const theme = useTheme();

  const chartData = {
    labels: mockChartData[chartView]?.labels.map((label) => label),
    datasets: [
      {
        label: 'Performance',
        data: mockChartData[chartView]?.datasets.map((data) => data),
        backgroundColor: theme.colors.backgroundChart,
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
        display: false,
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
