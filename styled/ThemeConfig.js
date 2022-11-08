import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@font-face {
	font-family: "Roboto-Regular";
	src: url("/fonts/roboto/Roboto-Regular.ttf");
	font-weight: 400;
}


@font-face {
	font-family: "Roboto-Bold";
	src: url("/fonts/roboto/Roboto-Bold.ttf");
	font-weight: 600;
}

@font-face {
	font-family: "Roboto-Light";
	src: url("/fonts/roboto/Roboto-Light.ttf");
	font-weight: 300;
}

@font-face {
	font-family: "Roboto-Medium";
	src: url("/fonts/roboto/Roboto-Medium.ttf");
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

@font-face {
	font-family: "Slab-Medium";
	src: url("/fonts/roboto-slab/RobotoSlab-Medium.ttf");
	font-weight: 500;
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
	color: ${({ theme }) => theme.textMain};
    background: ${({ theme }) => theme.backgroundMain};
	font-family: "Roboto-Regular";
}
	`;

export const lightTheme = {
  textMain: '#160344',
  textSecondary: '#fff',
  textFaded: '#a9a6ae',
  textWalletInfo: '#121212',
  backgroundMain: '#fff',
  headerMain: '#fe5e76',
  iconColor: '#000',
  buttonMain: '#39079b',
  gradientMain: 'linear-gradient(90deg, #fe5e76 0%, #f13abc 100.33%)',
  gradientWallet: 'linear-gradient(149.11deg, #f13abc 0.41%, #5f08ee 99.26%);',
  borderMain: '#e2e2e2',
  borderSecondary: '#160344',
  borderTertiary: '#f13abc',
  listHover: '#f5f5f5',
};

export const darkTheme = {
  textMain: '#fff',
  textSecondary: '#fff',
  textFaded: '#a9a6ae',
  textWalletInfo: '#121212',
  backgroundMain: '#000',
  headerMain: '#fe5e76',
  iconColor: '#fff',
  buttonMain: '#39079b',
  gradientMain: 'linear-gradient(90deg, #fe5e76 0%, #f13abc 100.33%)',
  gradientWallet: 'linear-gradient(149.11deg, #f13abc 0.41%, #5f08ee 99.26%);',
  borderMain: '#e2e2e2',
  borderSecondary: '#160344',
  borderTertiary: '#f13abc',
  listHover: '#f5f5f5',
};
