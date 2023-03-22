import React, { useEffect, useRef, useState } from 'react';
import { getTodayInDDMMYYYYFormat } from '@helpers/helperFunctions';
import image from '@images/HeroCircle.png';
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LineElement,
  LinearScale,
  PointElement,
} from 'chart.js';
import gradient from 'chartjs-plugin-gradient';
import { Line } from 'react-chartjs-2';
import { ApiService } from 'services/api.service';

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
    datasets: [0, 15, 0, 25, 20, 30, 40],
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

const plugin = {
  id: 'corsair',
  afterDraw: (chart) => {
    if (chart.tooltip?._active?.length) {
      let x = chart.tooltip._active[0].element.x;
      let yAxis = chart.scales.y;
      let ctx = chart.ctx;
      ctx.save();
      ctx.beginPath();
      ctx.setLineDash([5, 5]);
      ctx.moveTo(x, yAxis.top + chart.tooltip._active[0]?.element.y - 50);
      ctx.lineTo(x, yAxis.bottom);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#F13ABC';
      ctx.stroke();
      ctx.restore();
    }
  },
};

ChartJS.register(
  CategoryScale,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  gradient,
  plugin,
);

const PerformanceGraph = ({ chartView, graphData }) => {
  const [vaultStats, setVaultStats] = useState();
  const [chartLabelOfChartView, setChartLabelOfChartView] = useState([]);
  const [chartDataOfChartView, setChartDataOfChartView] = useState([]);
  useEffect(() => {
    getVaultDataById();
  }, []);

  useEffect(() => {
    console.log(chartView);
    if (chartView == 'W') {
      let labels = [];
      let datasets = [];
      vaultStats?.slice(-7).map((item) => {
        labels.push(item.date);
        datasets.push(item.price);
      });
      setChartDataOfChartView(datasets);
      setChartLabelOfChartView(labels);
    } else if (chartView == 'D') {
      const today = getTodayInDDMMYYYYFormat();
      let vaultStatByDate = vaultStats?.filter((stat) => {
        return stat.date == today;
      });
      console.log(vaultStatByDate);
      if (vaultStatByDate?.length != 0 && vaultStatByDate != undefined) {
        setChartDataOfChartView([vaultStatByDate[0].price]);
        setChartLabelOfChartView([vaultStatByDate[0].date]);
      } else {
        setChartDataOfChartView([0]);
        setChartLabelOfChartView(['there is no actual data for this period']);
      }
    } else {
      setChartDataOfChartView([]);
      setChartLabelOfChartView([]);
    }
  }, [chartView, vaultStats]);

  const getVaultDataById = async () => {
    try {
      const { data } = await ApiService.getUserVaultById('');
      setVaultStats(data.data.vaultStats.data);
    } catch (error) {
      console.log(error);
    }
  };

  const chartData = {
    labels:
      chartLabelOfChartView.length == 0
        ? mockChartData[chartView]?.labels.map((label) => label)
        : chartLabelOfChartView,
    datasets: [
      {
        label: 'Performance',
        data:
          chartDataOfChartView.length == 0
            ? mockChartData[chartView]?.datasets.map((data) => data)
            : chartDataOfChartView,
        fill: true,
        lineTension: 0.5,
        tension: 0.3,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#F13ABC',
        pointHoverRadius: 10,
        hoverBorderWidth: '5',
        gradient: {
          backgroundColor: {
            axis: 'y',
            colors: {
              1: '#fff',
              10: '#FAEAEF',
            },
          },
          borderColor: {
            axis: 'x',
            colors: {
              1: '#FE5E76',
              4: '#6A0EE5',
            },
          },
        },
      },
    ],
  };

  const options = {
    layout: {
      padding: {
        bottom: 50,
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        border: {
          display: false,
        },
        ticks: {
          color: '#A9A6AE',

          font: {
            size: chartView == 'W' ? 9 : 16,
            family: 'Roboto-Medium',
          },
        },
      },
    },
    position: 'right',
    showLine: true,
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#160344',
        titleFont: {
          size: 18,
        },
        bodyFont: {
          size: 12,
        },
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label;
          },
          title: function (tooltipItem, data) {
            return '$' + tooltipItem[0].dataset.data[tooltipItem[0].dataIndex];
          },
          labelColor: function (context) {
            return {
              fontSize: 30,
            };
          },

          labelTextColor: function (context) {
            return '#B9B3C7';
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    spanGaps: true,
  };

  return (
    <>
      <Line data={chartData} options={options}></Line>
    </>
  );
};

export default PerformanceGraph;
