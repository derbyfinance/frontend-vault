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
  backgroundMain: '#fff',
  textMain: '#160344',
  textSecondary: '#fff',
  iconColor: '#000',
};

export const darkTheme = {
  backgroundMain: '#000',
  textMain: '#fff',
  textSecondary: '#fff',
  iconColor: '#fff',
};
