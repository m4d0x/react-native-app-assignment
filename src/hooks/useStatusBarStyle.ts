// hooks/useStatusBarStyle.ts
import { useEffect } from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';

import { useTheme } from '../contexts/ThemeContext';

export const useStatusBarStyle = () => {
  const { theme } = useTheme();

  useEffect(() => {
    StatusBar.setBarStyle(theme.statusBarStyle as StatusBarStyle, true);
  }, [theme]);
};
