//SecretCard.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
