import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@font-face {
	font-family: RobotoSlab;
	src: url("../public/fonts/RobotoSlab/RobotoSlab-VariableFont_wght.ttf");
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
	font-family: 'RobotoSlab";
}
	`;

export const lightTheme = { background: '#e6e6e6', color: '#160344', iconColor: '#000' };

export const darkTheme = { background: '#000000', color: '#fff', iconColor: '#fff' };
