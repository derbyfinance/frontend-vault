import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
	padding: 0;
	box-sizing: border-box;
	text-decoration: none;
	outline: none;
	list-style: none;
}

body {
	color: ${({ theme }) => theme.colors.textMain};
    background: ${({ theme }) => theme.colors.backgroundMain};
	font-family: "Roboto-Regular";
}
	`;

const lightThemeColors = {
  textMain: '#160344',
  textSecondary: '#fff',
  textTertiary: '#121212',
  textFaded: '#a9a6ae',
  textError: '#E84142',
  textWalletInfo: '#121212',
  backgroundMain: '#FFFF',
  backgroundMainForToggle: '#000',
  backgroundForTable: '#ffff',
  backgroundChart: '#F2E6F1',
  headerMain: '#fe5e76',
  iconColor: '#000',
  buttonMain: '#39079b',
  tabDepositWithdrawActive: '#f13abc',
  buttonActive: '#fe5e76',
  gradientMain: 'linear-gradient(90deg, #fe5e76 0%, #f13abc 100.33%)',
  gradientWallet: 'linear-gradient(149.11deg, #f13abc 0.41%, #5f08ee 99.26%);',
  gradientTwo: 'linear-gradient(90deg, #fe5e76 50%, #f13abc 90.54%)',
  borderMain: '#e2e2e2',
  borderSecondary: '#160344',
  borderTertiary: '#f13abc',
  borderFaded: '#6a7278',
  listHover: '#f5f5f5',
  textBalancePositive: '#00c853',
  online: '#00FF38',
  textBalanceNegative: '#d50000',
  modalOverlay: 'rgba(0, 0, 0, 0.5)',
  vaultTitle: '#5F08EE',
  errorBackground: 'rgba(232, 65, 66, 0.1)',
  changeLabelGreen: '#26A17B',
  colorTableLabel: '#303030',
};

const darkThemeColors = {
  textMain: '#fff',
  textSecondary: '#fff',
  textFaded: '#a9a6ae',
  textWalletInfo: '#fff',
  textTertiary: '#121212',
  online: '#00FF38',
  textError: '#E84142',
  backgroundMain: '#000',
  backgroundMainForToggle: '#fff',
  backgroundForTable: '#1C1B1F',
  backgroundChart: '#F2E6F1',

  headerMain: '#fe5e76',
  tabDepositWithdraw: '#f13abc',
  iconColor: '#fff',
  buttonMain: '#39079b',
  buttonSecondary: '#f5f5f5',
  gradientMain: 'linear-gradient(90deg, #fe5e76 0%, #f13abc 100.33%)',
  gradientWallet: 'linear-gradient(149.11deg, #f13abc 0.41%, #5f08ee 99.26%);',
  gradientTwo: 'linear-gradient(90deg, #fe5e76 50%, #f13abc 90.54%)',
  borderMain: '#e2e2e2',
  borderSecondary: '#160344',
  borderTertiary: '#121212',
  borderFaded: '#6a7278',
  listHover: '#f5f5f5',
  textBalancePositive: '#00c853',
  textBalanceNegative: '#d50000',
  modalOverlay: 'rgba(0, 0, 0, 0.5)',
  vaultTitle: '#5F08EE',
  errorBackground: 'rgba(232, 65, 66, 0.1)',
  changeLabelGreen: '#26A17B',
  colorTableLabel: '#ffff',
};

const fonts = {
  robotoBold: ' 600 14px Roboto-Bold',
  robotoMedium: '500 14px Roboto-Medium',
  robotoRegular: '400 14px Roboto-Regular',
  robotoLight: '300 14px Roboto-Light',
  slabMedium: '500 14px Slab-Medium',
  slabRegular: '400 14px Slab-Regular',
  slabLight: '300 14px Slab-Light',
};

export const lightTheme = {
  colors: lightThemeColors,
  fonts,
};

export const darkTheme = {
  colors: darkThemeColors,
  fonts,
};
