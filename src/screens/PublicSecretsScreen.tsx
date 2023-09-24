import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

export default function PublicSecretsScreen() {
  const { theme } = useTheme();

  return (
    <View style={{ ...styles.container, backgroundColor: theme.background }}>
      <Text style={{ color: theme.text }}>Details Screen</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
