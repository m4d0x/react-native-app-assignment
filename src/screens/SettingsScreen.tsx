// SettingsScreen.tsx:
import { useFonts } from 'expo-font';
import * as Haptics from 'expo-haptics';
import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ToggleIcon } from '../components/AnimatedToggleIcon';
import { useTheme } from '../contexts/ThemeContext';
import { useToggle } from '../hooks/useToggle';
import { darkTheme } from '../themes/themes';

export default function SettingsScreen() {
  const { theme, toggleTheme, setThemeBasedOnBoolean } = useTheme();

  const handleToggleTheme = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    toggleTheme();
    toggleDarkMode();
  };

  const toggleKeepAwakeCallback = (newState: boolean) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (newState) {
      activateKeepAwakeAsync();
    } else {
      deactivateKeepAwake();
    }
  };

  const [isAwake, toggleKeepAwake] = useToggle<boolean>(
    false,
    (state) => !state,
    'keepAwakeKey',
    toggleKeepAwakeCallback,
  );

  const [isDarkMode, toggleDarkMode] = useToggle(
    theme === darkTheme,
    (state) => !state,
    'darkModeKey',
    setThemeBasedOnBoolean,
  );

  const [fontsLoaded] = useFonts({
    Spiderfingers: require('../assets/fonts/Spiderfingers-OOyA.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <Text>Settings Screen</Text> */}
      <Text style={{ ...styles.toggleHeader, color: theme.colors.text }}>
        Change Theme
      </Text>
      <TouchableOpacity onPress={toggleTheme} style={styles.TouchableOpacity}>
        <ToggleIcon
          toggleIsActive={isDarkMode}
          onPress={handleToggleTheme}
          style={styles.toggableIcon}
          size={60}
          // iconStyle={styles.iconStyle}
        />
      </TouchableOpacity>
      <Text style={{ ...styles.toggleHeader, color: theme.colors.text }}>
        Keep Awake
      </Text>
      <TouchableOpacity
        onPress={toggleKeepAwake}
        // style={styles.TouchableOpacity}
      >
        <ToggleIcon
          toggleIsActive={isAwake}
          onPress={toggleKeepAwake}
          style={styles.toggableIcon}
          size={60}
          // iconColor={theme.}
          // iconStyle={styles.iconStyle}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleHeader: {
    fontSize: 48,
    letterSpacing: 3,
    fontWeight: 'bold',
    marginBottom: 15,
    fontFamily: 'Spiderfingers', // Lägg till detta
  },
  TouchableOpacity: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggableIcon: {
    flex: 1,
  },
});
