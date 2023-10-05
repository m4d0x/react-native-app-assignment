//AppThemeProvider.tsx:
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';

import { Theme, darkTheme, lightTheme } from '../themes/themes';
import ThemeContext from './ThemeContext';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const AppThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  // Inuti AppThemeProvider.tsx
  const setThemes = (newTheme: Theme) => {
    setTheme(newTheme);
    AsyncStorage.setItem('theme', JSON.stringify(newTheme));
  };

  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('theme');
      if (storedTheme) {
        setTheme(JSON.parse(storedTheme));
      }
    };

    loadTheme();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === lightTheme ? darkTheme : lightTheme;
      AsyncStorage.setItem('theme', JSON.stringify(newTheme));
      return newTheme;
    });
  };

  // Ny funktion för att sätta temat baserat på en boolean
  const setThemeBasedOnBoolean = (isDarkMode: boolean) => {
    const newTheme = isDarkMode ? darkTheme : lightTheme;
    setTheme(newTheme);
    AsyncStorage.setItem('theme', JSON.stringify(newTheme));
  };

  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('theme');
      if (storedTheme) {
        setTheme(JSON.parse(storedTheme));
      }
    };

    loadTheme();
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setThemeBasedOnBoolean,
        setThemes,
        useStatusBarStyle: theme.statusBarStyle,
        buttonBackgroundColor: theme?.buttonBackgroundColor || 'defaultColor',
        buttonTextColor: theme?.buttonTextColor || 'defaultTextColor',
        toggleActiveColor: theme?.toggleActiveColor || 'defaultActiveColor',
        toggleInactiveColor:
          theme?.toggleInactiveColor || 'defaultInactiveColor',
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default AppThemeProvider;
