import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@font-face {
	font-family: "Roboto-Regular";
	src: url("/fonts/roboto/Roboto-Regular.ttf");
	font-weight: 400;
}

@font-face {
	font-family: "Roboto-Black";
	src: url("/fonts/roboto/Roboto-Black.ttf");
	font-weight: 400;
}

@font-face {
	font-family: "Roboto-Bold";
	src: url("/fonts/roboto/Roboto-Bold.ttf");
	font-weight: 900;
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
	font-family: "Roboto-Thin";
	src: url("/fonts/roboto/Roboto-Thin.ttf");
	font-weight: 100;
}

@font-face {
	font-family: "Slab-Regular";
	src: url("/fonts/roboto-slab/RobotoSlab-Regular.ttf");
	font-weight: 400;
}

@font-face {
	font-family: "Slab-Black";
	src: url("/fonts/roboto-slab/RobotoSlab-Black.ttf");
	font-weight: 900;
}

@font-face {
	font-family: "Slab-Bold";
	src: url("/fonts/roboto-slab/RobotoSlab-Bold.ttf");
	font-weight: 700;
}

@font-face {
	font-family: "Slab-ExtraBold";
	src: url("/fonts/roboto-slab/RobotoSlab-ExtraBold.ttf");
	font-weight: 800;
}

@font-face {
	font-family: "Slab-ExtraLight";
	src: url("/fonts/roboto-slab/RobotoSlab-ExtraLight.ttf");
	font-weight: 200;
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

@font-face {
	font-family: "Slab-SemiBold";
	src: url("/fonts/roboto-slab/RobotoSlab-SemiBold.ttf");
	font-weight: 600;
}

@font-face {
	font-family: "Slab-Thin";
	src: url("/fonts/roboto-slab/RobotoSlab-Thin.ttf");
	font-weight: 100;
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
  background: '#fff',
  color: '#160344',
  iconColor: '#000',
};

export const darkTheme = {
  background: '#000000',
  color: '#fff',
  iconColor: '#fff',
};
