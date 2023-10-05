// App.tsx
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Audio } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native'; // Lägg till Button för att skapa en temaväxlingsknapp
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppThemeProvider from './src/contexts/AppThemeProvider';
import { KeepAwakeProvider } from './src/contexts/KeepAwakeContext';
import { useTheme } from './src/contexts/ThemeContext'; // Lägg till useThemeToggle
import { useStatusBarStyle } from './src/hooks/useStatusBarStyle';
import RootTabsNavigator from './src/navigators/RootTabsNavigator';

function App() {
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  function AppContent() {
    const [soundObj, setSoundObj] = useState<Audio.Sound | null>(null);

    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('./src/assets/audio/ofeliasdream.mp3'),
        {
          shouldPlay: true,
          isLooping: true,
        },
      );

      await sound.setVolumeAsync(0.1); // Sätter volymen till 50%
      setSoundObj(sound);
    };

    useEffect(() => {
      loadSound();

      return () => {
        // Unload the sound if it exists
        if (soundObj) {
          soundObj.unloadAsync();
        }
      };
    }, []);

    useStatusBarStyle();
    const [statusBarStyle, setStatusBarStyle] = useState<
      'auto' | 'inverted' | 'light' | 'dark'
    >('auto');
    const { theme } = useTheme();

    useEffect(() => {
      setStatusBarStyle(
        theme.statusBarStyle as 'auto' | 'inverted' | 'light' | 'dark',
      );
    }, [theme]);

    const setTheme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: theme.primary,
        secondary: theme.secondary,
        background: theme.background,
        card: theme.background,
        text: theme.text,
        border: theme.borderColor,
        // activeIconColor: theme.tabBarActiveTintColor,
        // inactiveIconColor: theme.tabBarInactiveTintColor,
      },
    };

    return (
      <KeepAwakeProvider>
        <SafeAreaProvider>
          <NavigationContainer theme={setTheme}>
            <StatusBar style={theme.statusBarStyle} />
            <RootTabsNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </KeepAwakeProvider>
    );
  }

  return (
    <AppThemeProvider>
      <AppContent />
    </AppThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
