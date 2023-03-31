import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import {  ThemeProvider } from 'styled-components';
import {GlobalStyles,lightTheme } from '../styled/ThemeConfig'

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
    },
    Provider: ThemeProvider,
    GlobalStyles,
})];