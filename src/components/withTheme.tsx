import React from 'react';
import { ThemeProvider } from './ThemeProvider';

export const withTheme = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    return (
      <ThemeProvider>
        <Component {...props} />
      </ThemeProvider>
    );
  };
};
