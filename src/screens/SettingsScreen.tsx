import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ThemedToggleIcon from '../components/ThemedToggleIcon'; // Use default import
import { useTheme, useToggleTheme } from '../contexts/ThemeContext';

export default function SettingsScreen() {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();

  return (
    <View
      style={{
        backgroundColor: theme.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: theme.secondary }}>Settings Screen</Text>
      <TouchableOpacity
        onPress={toggleTheme}
        style={{ padding: 20, marginTop: 20 }}
      >
        <ThemedToggleIcon />
      </TouchableOpacity>
    </View>
  );
}
