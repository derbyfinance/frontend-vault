import ethereum from '@icons/EthereumNetwork';
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

const data = [
  { name: 'ETH', icon: ethereum, dataCoverage: 0.314, colorProps: 1 },
  { name: 'BSC', icon: ethereum, dataCoverage: 0.208, colorProps: 0.9 },
  { name: 'OPT', icon: ethereum, dataCoverage: 0.102, colorProps: 0.8 },
  { name: 'AVA', icon: ethereum, dataCoverage: 0.247, colorProps: 0.7 },
  { name: 'POL', icon: ethereum, dataCoverage: 0.081, colorProps: 0.6 },
  { name: 'ARB', icon: ethereum, dataCoverage: 0.078, colorProps: 0.5 },
  { name: 'FAN', icon: ethereum, dataCoverage: 0.032, colorProps: 0.4 },
];
const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      displayColors: false,
      callbacks: {
        title(items) {
          return items[0].raw._data.name;
        },
        label(item) {
          const {
            _data: { dataCoverage },
          } = item.raw;
          return [`Data Coverage: ${dataCoverage * 100}%`];
        },
      },
    },
  },
};

const config = {
  type: 'treemap',
  data: {
    datasets: [
      {
        tree: data,
        key: 'dataCoverage',
        labels: {
          display: true,
          formatter: (context) => [
            context.raw._data.name,
            context.raw._data.dataCoverage * 100 + '%',
          ],
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

const StyledTreeMap = styled.div`
  margin-bottom: 84px;
`;

export default function TreemapChart() {
  return (
    <StyledTreeMap>
      <Chart type="treemap" data={config.data} options={options} />
    </StyledTreeMap>
  );
}
