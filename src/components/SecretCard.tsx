//SecretCard.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from '../contexts/ThemeContext';
import { toggleLike } from '../utils/storage';
import ThemedLikeButton from './ThemedLikeButton';

type Secret = {
  id: string;
  author: string;
  text: string;
  timestamp: string;
  likes: number; // Lägg till denna rad
};

type SecretCardProps = {
  secret: Secret;
};

export default function SecretCard({ secret }: SecretCardProps) {
  const { theme } = useTheme();

  // Inuti din SecretCard-komponent
  const handleLikePress = async () => {
    // Notera 'async' här
    let isLiked; // Deklarera variabeln men tilldela inget värde ännu

    try {
      isLiked = await fetchIsLikedFromDatabaseOrState(secret.id); // Använd 'await' här
    } catch (error) {
      console.error('Failed to fetch isLiked:', error);
      return;
    }

    toggleLike(secret.id, isLiked); // Nu är isLiked en boolean och inte en Promise
  };

  return (
    <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
      <View style={styles.cardContent}>
        <View style={styles.textContainer}>
          <Text style={{ color: theme.cardText }}>{secret.author} wrote:</Text>
          <Text style={{ color: theme.cardText }}>{secret.text}</Text>
          <Text style={{ color: theme.cardText }}>{secret.timestamp}</Text>
          <Text style={{ color: theme.cardText }}>Likes: {secret.likes}</Text>
        </View>
        <View style={styles.iconContainer}>
          <ThemedLikeButton onPress={handleLikePress} />
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
