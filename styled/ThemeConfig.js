import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@font-face {
	font-family: "Roboto-Bold";
	src: url("/fonts/roboto/Roboto-Bold.ttf");
	font-weight: 600;
}

@font-face {
	font-family: "Roboto-Medium";
	src: url("/fonts/roboto/Roboto-Medium.ttf");
	font-weight: 500;
}

@font-face {
	font-family: "Roboto-Regular";
	src: url("/fonts/roboto/Roboto-Regular.ttf");
	font-weight: 400;
}

@font-face {
	font-family: "Roboto-Light";
	src: url("/fonts/roboto/Roboto-Light.ttf");
	font-weight: 300;
}



@font-face {
	font-family: "Slab-Medium";
	src: url("/fonts/roboto-slab/RobotoSlab-Medium.ttf");
	font-weight: 500;
}

@font-face {
	font-family: "Slab-Regular";
	src: url("/fonts/roboto-slab/RobotoSlab-Regular.ttf");
	font-weight: 400;
}

@font-face {
	font-family: "Slab-Light";
	src: url("/fonts/roboto-slab/RobotoSlab-Light.ttf");
	font-weight: 300;
}



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
  textWalletInfo: '#121212',
  backgroundMain: '#fff',
  headerMain: '#fe5e76',
  iconColor: '#000',
  buttonMain: '#39079b',
  gradientMain: 'linear-gradient(90deg, #fe5e76 0%, #f13abc 100.33%)',
  gradientWallet: 'linear-gradient(149.11deg, #f13abc 0.41%, #5f08ee 99.26%);',
  gradientTwo: 'linear-gradient(90deg, #fe5e76 50%, #f13abc 90.54%)',
  borderMain: '#e2e2e2',
  borderSecondary: '#160344',
  borderTertiary: '#f13abc',
  listHover: '#f5f5f5',
  textBalancePositive: '#00c853',
  textBalanceNegative: '#d50000',
};

const darkThemeColors = {
  textMain: '#fff',
  textSecondary: '#fff',
  textFaded: '#a9a6ae',
  textWalletInfo: '#fff',
  textTertiary: '#121212',
  backgroundMain: '#000',
  headerMain: '#fe5e76',
  iconColor: '#fff',
  buttonMain: '#39079b',
  gradientMain: 'linear-gradient(90deg, #fe5e76 0%, #f13abc 100.33%)',
  gradientWallet: 'linear-gradient(149.11deg, #f13abc 0.41%, #5f08ee 99.26%);',
  gradientTwo: 'linear-gradient(90deg, #fe5e76 50%, #f13abc 90.54%)',
  borderMain: '#e2e2e2',
  borderSecondary: '#160344',
  borderTertiary: '#f13abc',
  listHover: '#f5f5f5',
  textBalancePositive: '#00c853',
  textBalanceNegative: '#d50000',
};

const font = {
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
  font,
};

export const darkTheme = {
  colors: darkThemeColors,
  font,
};
