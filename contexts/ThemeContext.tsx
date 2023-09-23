import React, { ReactNode, createContext, useContext, useState } from 'react';
import { lightTheme } from '../themes';

interface ThemeContextProps {
  theme: any;
  setTheme: (theme: any) => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
