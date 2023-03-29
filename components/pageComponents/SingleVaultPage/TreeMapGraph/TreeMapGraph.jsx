import { useEffect, useState } from 'react';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { color } from 'chart.js/helpers';
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';
import { Chart } from 'react-chartjs-2';
import { ApiService } from 'services/api.service';
import styled from 'styled-components';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TreemapController,
  TreemapElement,
);
ChartJS.defaults.font.family = 'Roboto';
ChartJS.defaults.font.size = 18;

const StyledTreeMap = styled.div`
  margin-bottom: 84px;
`;

export default function TreemapChart() {
  const [chainAllocations, setChainAllocations] = useState([]);

  useEffect(() => {
    getVaultDataById();
  }, []);

  const getVaultDataById = async () => {
    try {
      const { data } = await ApiService.getUserVaultById('');
      let newChainAllocations = data.data.chainAllocations.map((el, index) => {
        return {
          name: Object.keys(el)[0],
          dataCoverage: Object.values(el)[0] / 100,
          colorProps: 1 - Number(`0.${index}`),
        };
      });
      setChainAllocations(newChainAllocations);
    } catch (error) {
      console.log(error);
    }
  };

  const options = {
    plugins: false,
    //TODO
    // legend: {
    //   display: false,
    // },
    // tooltip: {
    //   displayColors: false,
    //   callbacks: {
    //     title(items) {
    //       return items[0].raw._data.name;
    //     },
    //     label(item) {
    //       const {
    //         _data: { dataCoverage },
    //       } = item.raw;
    //       return [`Data Coverage: ${dataCoverage * 100}%`];
    //     },
    //   },
    // },
    // },
  };

  function colorFromRaw(ctx) {
    if (ctx.type !== 'data') return 'transparent';
    const { dataCoverage, colorProps } = ctx.raw._data;
    return dataCoverage === 0
      ? color('grey').rgbString()
      : color('#39079B')
          .alpha(colorProps + 0.1)
          .rgbString();
  }

  const config = {
    type: 'treemap',
    data: {
      datasets: [
        {
          tree: chainAllocations,
          key: 'dataCoverage',
          hoverBackgroundColor: (ctx) => colorFromRaw(ctx),
          labels: {
            display: true,
            hoverFont: {
              size: 20,
            },
            formatter: (context) => {
              return [
                context.raw._data.name,
                context.raw._data.dataCoverage * 100 + '%',
              ];
            },
            color: '#fff',
            font: {
              weight: 500,
            },
          },
          backgroundColor(context) {
            if (context.type !== 'data') return 'transparent';
            const { dataCoverage, colorProps } = context.raw._data;
            return dataCoverage === 0
              ? color('grey').rgbString()
              : color('#39079B').alpha(colorProps).rgbString();
          },
        },
      ],
    },
  };
  return (
    <StyledTreeMap>
      <Chart type="treemap" data={config.data} options={options} />
    </StyledTreeMap>
  );
}
