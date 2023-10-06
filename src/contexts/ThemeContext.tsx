//ThemeContext.tsx:
import { createContext, useContext } from 'react';

import { Theme } from '../themes/themes';

interface ThemeContextProps {
  theme: Theme; // Detta inkluderar nu också colors för att kunna avända 'theme.colors.theColor' varsomhelst i appen
  toggleTheme: () => void;
  setThemes: (newTheme: Theme) => void;
  setThemeBasedOnBoolean: (isDarkMode: boolean) => void;
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
