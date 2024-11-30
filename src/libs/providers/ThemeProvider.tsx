import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import theme from '@styles/theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
