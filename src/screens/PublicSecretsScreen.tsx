//PublicSecretsScreen.tsx:
import { useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'; // Ändrad import
import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import SecretCard from '../components/SecretCard';
import { useTheme } from '../contexts/ThemeContext';
import { getData } from '../utils/storage';

type Secret = {
  id: string;
  author: string;
  text: string;
  timestamp: string;
  likes: number;
};

export default function SecretsScreen() {
  const { theme } = useTheme();
  const [secrets, setSecrets] = useState<Secret[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        const fetchedData = await getData();
        setSecrets(fetchedData);
      };
      fetchData();
    }, []),
  );

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <FlatList
        data={secrets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SecretCard secret={item} />}
      />
      <LinearGradient
        colors={['transparent', theme.colors.themedGradientLinearTint]}
        style={[styles.overlay, { height: '25%' }]}
      />
      <LinearGradient
        colors={[theme.colors.themedGradientLinearTint, 'transparent']}
        style={[styles.overlay, { top: 0, height: '25%' }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 50,
  },
});
