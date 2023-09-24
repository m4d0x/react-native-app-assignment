import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme } from './src/contexts/ThemeContext';
import RootTabsNavigator from './src/navigators/RootTabsNavigator';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme } = useTheme();

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: theme.primary,
      background: theme.secondary,
      card: theme.background, // <-- lägg till detta
      text: theme.text,
      divider: theme.dividerColor,
    },
  };

  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        backgroundColor: theme.background,
        borderBottomColor: theme.dividerColor,
      }}
    >
      <NavigationContainer theme={navTheme}>
        {/* Använd 'statusBarStyle' från temat här */}
        <StatusBar style={theme.statusBarStyle} />
        <RootTabsNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
