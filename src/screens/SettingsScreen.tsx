import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ThemedToggleIcon from '../components/ThemedToggleIcon'; // Use default import
import { useTheme, useToggleTheme } from '../contexts/ThemeContext';

export default function SettingsScreen() {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();

  const [keepAwakeEnabled, setKeepAwakeEnabled] = useState(false);

  // Activate keep-awake if keepAwakeEnabled is true
  useEffect(() => {
    const manageKeepAwake = async () => {
      if (keepAwakeEnabled) {
        await activateKeepAwakeAsync();
      } else {
        await deactivateKeepAwake();
      }
    };
    manageKeepAwake();
  }, [keepAwakeEnabled]);

  const toggleKeepAwake = () => {
    setKeepAwakeEnabled(!keepAwakeEnabled);
  };

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
      <TouchableOpacity
        onPress={toggleKeepAwake}
        style={{ padding: 20, marginTop: 20 }}
      >
        {/* You might want to use a different icon here to differentiate */}
        <ThemedToggleIcon />
      </TouchableOpacity>
    </View>
  );
}
