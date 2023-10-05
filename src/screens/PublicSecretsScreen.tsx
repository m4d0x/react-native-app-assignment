//PublicSecretsScreen.tsx:
import { useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'; // Ändrad import
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { useTheme } from '../contexts/ThemeContext';
import { getData } from '../utils/storage';

type Secret = {
  id: string;
  author: string;
  text: string;
  timestamp: string;
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
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={secrets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[styles.card, { backgroundColor: theme.cardBackground }]}
          >
            <Text style={{ color: theme.cardText }}>{item.author} wrote:</Text>
            <Text style={{ color: theme.cardText }}>{item.text}</Text>
            <Text style={{ color: theme.cardText }}>{item.timestamp}</Text>
          </View>
        )}
      />
      <LinearGradient
        colors={['transparent', theme.background]}
        style={[styles.overlay, { height: '30%' }]}
      />
      <LinearGradient
        colors={[theme.background, 'transparent']}
        style={[styles.overlay, { top: 0, height: '30%' }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 50,
  },
});
