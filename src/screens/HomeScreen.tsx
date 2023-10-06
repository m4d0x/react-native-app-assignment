import { useFonts } from 'expo-font';
import * as Haptics from 'expo-haptics'; // Lägg till denna rad
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AnimatedResponseText from '../components/AnimatedResponseText';
import { ThemedButton } from '../components/ThemedButton';
import ThemedTextInput from '../components/ThemedTextInputField';
import { useTheme } from '../contexts/ThemeContext';
import { storeData } from '../utils/storage';

export default function HomeScreen() {
  const { theme } = useTheme();
  const [text, setText] = useState<string>('');
  const [storedText, setHomeReactionText] = useState<string | null>(null);
  const fadeAnim = 1;

  const [fontsLoaded] = useFonts({
    Spiderfingers: require('../assets/fonts/Spiderfingers-OOyA.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleYes = async () => {
    if (text.trim() === '') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy); // Heavy feedback
      setHomeReactionText("You can't keep a secret if there is none!");
    } else {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); // Medium feedback
      setHomeReactionText('Your secret is safe with me.');
      await storeData(text); // Lagrar texten
    }
    setText('');
  };

  const handleNo = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); // Medium feedback
    setText('');
    setHomeReactionText('Catchy text for the "No" button.');
  };

  return (
    <View style={{ ...styles.container }}>
      <View style={styles.animatedView}>
        <AnimatedResponseText text={storedText} fadeAnim={fadeAnim} />
      </View>
      <Text
        style={{
          ...styles.questionText,
          color: theme.colors.text,
          fontFamily: 'Spiderfingers',
        }}
      >
        {' '}
        What's your dirty lil´ secret?
      </Text>
      <ThemedTextInput
        placeholder="Type your secret here..."
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
      <View style={styles.buttonContainer}>
        <ThemedButton title="Delete" onPress={handleNo} />
        <ThemedButton title="Post" onPress={handleYes} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedView: {
    position: 'absolute',
    top: '0%',
  },
  input: {
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  questionText: {
    fontSize: 28,
    letterSpacing: 3,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
