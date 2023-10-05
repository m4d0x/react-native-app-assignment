//SecretCard.tsx
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import theme from 'react-native-elements/dist/config/theme';
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
  
    const [likes, setLikes] = useState(secret.likes); // För likes
    const [isLiked, setIsLiked] = useState(false); // För att hålla koll på om en secret är gillad eller inte
  
    const handleLikePress = async () => {
      setIsLiked(!isLiked); // Uppdatera isLiked när knappen trycks på
      // Uppdatera det lokala state-värdet baserat på isLiked
      setLikes(isLiked ? likes - 1 : likes + 1);
      toggleLike(secret.id, isLiked); // Jag tog bort setLikes här, för vi redan gör det ovan
    };
    // ...
  }

// framtida function för databas-anrop
//   const handleLikePress = async () => {
//     // Notera 'async' här
//     let isLiked; // Deklarera variabeln men tilldela inget värde ännu

//     try {
//       isLiked = await fetchIsLikedFromDatabaseOrState(secret.id); // Använd 'await' här
//     } catch (error) {
//       console.error('Failed to fetch isLiked:', error);
//       return;
//     }

//     toggleLike(secret.id, isLiked); // Nu är isLiked en boolean och inte en Promise
//   };

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
