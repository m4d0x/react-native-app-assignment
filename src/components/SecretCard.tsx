//SecretCard.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from '../contexts/ThemeContext';

type Secret = {
  id: string;
  author: string;
  text: string;
  timestamp: string;
};

type SecretCardProps = {
  secret: Secret;
};

export default function SecretCard({ secret }: SecretCardProps) {
  const { theme } = useTheme();
  return (
    <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
      <View style={styles.cardContent}>
        <View style={styles.textContainer}>
          <Text style={{ color: theme.cardText }}>{secret.author} wrote:</Text>
          <Text style={{ color: theme.cardText }}>{secret.text}</Text>
          <Text style={{ color: theme.cardText }}>{secret.timestamp}</Text>
        </View>
        <View style={styles.iconContainer}>
          {/* <ThemedLikeButton onPress={} /> */}
          {/* Här kan du lägga till fler ikoner om du vill */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
  },
});
