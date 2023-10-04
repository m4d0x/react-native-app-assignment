//ThemeContext.tsx:
import { createContext, useContext } from 'react';

import { Theme } from '../themes/themes';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  setThemes: (newTheme: Theme) => void;
  setThemeBasedOnBoolean: (isDarkMode: boolean) => void;
  useStatusBarStyle: 'auto' | 'inverted' | 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
