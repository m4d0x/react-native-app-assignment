// SettingsScreen.tsx:
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
    toggleTheme();
    toggleDarkMode();
  };

  const toggleKeepAwakeCallback = (newState: boolean) => {
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

  return (
    <View style={styles.container}>
      {/* <Text>Settings Screen</Text> */}
      <Text style={{ ...styles.toggleHeader, color: theme.text }}>
        Toggle Theme
      </Text>
      <TouchableOpacity onPress={toggleTheme} style={styles.TouchableOpacity}>
        <ToggleIcon
          toggleIsActive={isDarkMode}
          onPress={handleToggleTheme}
          style={styles.toggableIcon}
          // iconStyle={styles.iconStyle}
        />
      </TouchableOpacity>
      <Text style={{ ...styles.toggleHeader, color: theme.text }}>
        Toggle Keep Awake
      </Text>
      <TouchableOpacity
        onPress={toggleKeepAwake}
        style={styles.TouchableOpacity}
      >
        <ToggleIcon
          toggleIsActive={isAwake}
          onPress={toggleKeepAwake}
          style={styles.toggableIcon}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  TouchableOpacity: {
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 100,
    height: 40,
    borderRadius: 25,
    // fontSize: 24,
    // color: theme.buttonColor,
  },
  toggableIcon: {
    size: 24,
    width: 50,
    height: 40,
  },
});
