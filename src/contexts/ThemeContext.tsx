import { createContext, useContext, useState } from 'react';
import { Theme, darkTheme, lightTheme } from '../themes/themes';

type ThemeProviderProps = {
  children: React.ReactNode;
};

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(null as any);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme as Theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context.theme;
};

export const useToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return toggleTheme;
};

// const toggleTheme = useToggleTheme();

// toggleTheme(); // Kör denna när du vill byta tema
