import React, { useEffect, useRef, useState } from 'react';
import { formatDateToMonthDay, getTodayInDDMMYYYYFormat } from '@helpers/helperFunctions';
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

const PerformanceGraph = ({ chartView, optionIndex }) => {
  const [vaultStats, setVaultStats] = useState();
  const [chartLabelOfChartView, setChartLabelOfChartView] = useState([]);
  const [chartDataOfChartView, setChartDataOfChartView] = useState([]);

  useEffect(() => {
    getVaultDataById();
  }, []);

  useEffect(() => {
    if (chartView == 'W') {
      let labels = [];
      let datasets = [];
      vaultStats?.slice(-7).map((item) => {
        labels.push(item.date);
        datasets.push(item[optionIndex]);
      });
      setChartDataOfChartView(datasets);
      setChartLabelOfChartView(labels);
    } else if (chartView == 'D') {
      const today = getTodayInDDMMYYYYFormat();
      let vaultStatByDate = vaultStats?.filter((stat) => {
        return stat.date == '20-03-2023'; //Temp solution for UI
        // return stat.date == today;
      });
      if (vaultStatByDate?.length != 0 && vaultStatByDate != undefined) {
        setChartDataOfChartView([vaultStatByDate[0][optionIndex]]);
        setChartLabelOfChartView([vaultStatByDate[0].date]);
      } else {
        setChartDataOfChartView([0]);
        setChartLabelOfChartView(['there is no actual data for this period']);
      }
    } else if (chartView == 'M') {
      let labels = [];
      let datasets = [];
      vaultStats?.map((item) => {
        labels.push(item.date);
        datasets.push(item[optionIndex]);
      });
      setChartDataOfChartView(datasets);
      setChartLabelOfChartView(labels);
    } else if (chartView == 'Y') {
      let labels = [];
      let datasets = [];
      vaultStats?.map((item) => {
        labels.push(item.date);
        datasets.push(item[optionIndex]);
      });
      setChartDataOfChartView(datasets);
      setChartLabelOfChartView(labels);
    } else if (chartView == 'All') {
      let labels = [];
      let datasets = [];
      vaultStats?.map((item) => {
        labels.push(item.date);
        datasets.push(item[optionIndex]);
      });
      setChartDataOfChartView(datasets);
      setChartLabelOfChartView(labels);
    } else {
      setChartDataOfChartView([]);
      setChartLabelOfChartView([]);
    }
  }, [chartView, vaultStats, optionIndex]);

  const getVaultDataById = async () => {
    try {
      const { data } = await ApiService.getUserVaultById('');
      setVaultStats(data.data.vaultStats.data);
    } catch (error) {
      console.log(error);
    }
  };

  const chartData = {
    labels: chartLabelOfChartView.map((date) => formatDateToMonthDay(date)),
    datasets: [
      {
        label: 'Performance',
        data: chartDataOfChartView,
        // data: chartDataOfChartView.map((item) => {
        //   if(item.toString().length > 6){
        //     return (item / 1e6)
        //   }else{
        //     return item
        //   }
        // }),
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
            size: 16,
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
          size: 16,
          family: 'Roboto-Medium',
        },
        bodyFont: {
          size: 12,
        },
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label;
          },
          title: function (tooltipItem, data) {
            console.log(tooltipItem[0].dataset.data[tooltipItem[0].dataIndex]);
            if (
              tooltipItem[0].dataset.data[tooltipItem[0].dataIndex].toString()
                .length > 6
            ) {
              return (
                '$' +
                tooltipItem[0].dataset.data[tooltipItem[0].dataIndex] / 1e6 +
                'M'
              );
            }
            return '$' + tooltipItem[0].dataset.data[tooltipItem[0].dataIndex];
          },
          labelColor: function (context) {
            return {
              fontSize: 8,
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
