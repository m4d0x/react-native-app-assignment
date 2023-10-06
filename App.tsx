// App.tsx
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Audio } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppThemeProvider from './src/contexts/AppThemeProvider';
import { KeepAwakeProvider } from './src/contexts/KeepAwakeContext';
import { useTheme } from './src/contexts/ThemeContext';
import { useStatusBarStyle } from './src/hooks/useStatusBarStyle';
import RootTabsNavigator from './src/navigators/RootTabsNavigator';

function App() {
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

      await sound.setVolumeAsync(0.1); // Sätter volymen till 10%
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
    const { theme } = useTheme();

    // useStatusBarStyle();
    // const [statusBarStyle, setStatusBarStyle] = useState<
    //   'auto' | 'inverted' | 'light' | 'dark'
    // >('auto');

    // useEffect(() => {
    //   setStatusBarStyle(
    //     theme.colors.statusBarStyle as 'auto' | 'inverted' | 'light' | 'dark',
    //   );
    // }, [theme]);

    const setTheme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: theme.colors.background ?? DefaultTheme.colors.background,
        card: theme.colors.background ?? DefaultTheme.colors.card,
        text: theme.colors.text ?? DefaultTheme.colors.text,
        border: theme.colors.borderColor ?? DefaultTheme.colors.border,
      },
    };

    return (
      <KeepAwakeProvider>
        <SafeAreaProvider>
          <NavigationContainer theme={setTheme}>
            <StatusBar />
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
