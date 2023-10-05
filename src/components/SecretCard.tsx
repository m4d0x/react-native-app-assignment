//SecretCard.tsx
import React from 'react';
import { Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useTheme } from '../contexts/ThemeContext';
import ThemedLikeButton from './ThemedLikeButton';

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
                    <Text style={{ color: theme.cardText }}>
                        {secret.author} wrote:
                    </Text>
                    <Text style={{ color: theme.cardText }}>{secret.text}</Text>
                    <Text style={{ color: theme.cardText }}>{secret.timestamp}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <ThemedLikeButton onPress={() => {}} />
                    <AntDesign
                        name="dislike1"
                        size={24}
                        color={theme.tabBarActiveTintColor}
                        style={styles.iconSpacing}
                    />
                    <AntDesign
                        name="heart"
                        size={24}
                        color={theme.tabBarActiveTintColor}
                        style={styles.iconSpacing}
                    />
                </View>
            </View>
    )