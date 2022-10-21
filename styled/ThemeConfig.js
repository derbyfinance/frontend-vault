import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@font-face {
	font-family: "Roboto-Regular";
	src: url("/fonts/roboto/Roboto-Regular.ttf");
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
	color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.background};
	font-family: "Roboto-Regular";
}
	`;

export const lightTheme = {
  background: '#e6e6e6',
  color: '#160344',
  iconColor: '#000',
};

export const darkTheme = {
  background: '#000000',
  color: '#fff',
  iconColor: '#fff',
};
