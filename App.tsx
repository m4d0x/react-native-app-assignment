import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeepAwakeProvider } from './src/contexts/KeepAwakeContext';
import { ThemeProvider, useTheme } from './src/contexts/ThemeContext';
import RootTabsNavigator from './src/navigators/RootTabsNavigator';

function App() {
  return (
    <ThemeProvider>
      <KeepAwakeProvider>
        <AppContent />
      </KeepAwakeProvider>
    </ThemeProvider>
  );
}

function AppContent() {
  const theme = useTheme();

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors, // Behåll default colors
      primary: theme.primary, // Tematisera primärfärg
      background: theme.secondary, // Tematisera bakgrundsfärg
      card: theme.background, // Tematisera bakgrundsfärg
      text: theme.text, //Tematisera textfärg
      border: theme.borderColor, // Tematisera borderColor
    },
  };

  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        // backgroundColor: theme.background, // Tematisera bakgrundsfärg
        // borderBottomColor: theme.dividerColor, // Tematisera dividerColor
      }}
    >
      <NavigationContainer theme={navTheme}>
        <StatusBar style={theme.statusBarStyle} />
        <RootTabsNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
