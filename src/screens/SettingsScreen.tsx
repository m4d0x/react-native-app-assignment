import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme(); // Use toggleTheme from context

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
        onPress={toggleTheme} // Use toggleTheme from context
        style={{ padding: 20, backgroundColor: theme.secondary, marginTop: 20 }}
      >
        <Text style={{ color: theme.primary }}>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
}
