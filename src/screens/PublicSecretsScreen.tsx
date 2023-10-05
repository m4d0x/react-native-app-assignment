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
        renderItem={({ item }) => <SecretCard secret={item} />}
      />
      {/* <FlatList
        data={secrets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[styles.card, { backgroundColor: theme.cardBackground }]}
          >
            <View style={styles.cardContent}>
              <View style={styles.textContainer}>
                <Text style={{ color: theme.cardText }}>
                  {item.author} wrote:
                </Text>
                <Text style={{ color: theme.cardText }}>{item.text}</Text>
                <Text style={{ color: theme.cardText }}>{item.timestamp}</Text>
              </View>

              <View style={styles.iconContainer}>
                <AntDesign
                  name="like1"
                  size={24}
                  color={theme.tabBarActiveTintColor}
                />
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
                />
              </View>
            </View>
          </View>
        )}
      /> */}
      <LinearGradient
        colors={['transparent', theme.background]}
        style={[styles.overlay, { height: '15%' }]}
      />
      <LinearGradient
        colors={[theme.background, 'transparent']}
        style={[styles.overlay, { top: 0, height: '15%' }]}
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
  iconSpacing: {
    marginHorizontal: 10,
  },
});
