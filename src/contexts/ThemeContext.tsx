import { createContext, useContext, useState } from 'react';
import { darkTheme, lightTheme } from '../themes/themes';

interface Theme {
  primary: string;
  secondary: string;
  background: string;
  dividerColor: string;
  text: string;
  error: string;
  buttonColor: string;
  statusBarStyle: 'auto' | 'inverted' | 'light' | 'dark'; // <-- Ändra här
  activeIconColor: string; // Lägg till denna rad
}

type ThemeProviderProps = {
  children: React.ReactNode;
};

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme as Theme);

  const toggleTheme = () => {
    setTheme((theme === lightTheme ? darkTheme : lightTheme) as Theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
