//HomeReactionText.tsx
import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';

import { useTheme } from '../contexts/ThemeContext';

interface AnswerTextProps {
  text: string | null;
  fadeAnim: number;
}

const AnswerText: React.FC<AnswerTextProps> = ({ text, fadeAnim }) => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [fade] = useState(new Animated.Value(fadeAnim));

  useEffect(() => {
    if (text) {
      setIsVisible(true);
      Animated.timing(fade, {
        toValue: 1,
        duration: 1000, // Adjust the duration as needed
        useNativeDriver: false,
      }).start(() => {
        // Automatically hide the text after a delay
        setTimeout(() => {
          Animated.timing(fade, {
            toValue: fadeAnim,
            duration: 1000, // Adjust the duration as needed
            useNativeDriver: false,
          }).start(() => {
            setIsVisible(false);
          });
        }, 2000); // Adjust the delay as needed (2 seconds in this example)
      });
    }
  }, [text, fade, fadeAnim]);

  const styles = StyleSheet.create({
    animatedView: {
      // position: 'relative',
      top: 0,
      left: 0,
      right: 0,
    },
  });

  return (
    isVisible && (
      <Animated.View style={[{ opacity: fade }, styles.animatedView]}>
        <Text style={{ color: theme.theme.animatedText }}>{text}</Text>
      </Animated.View>
    )
  );
};

export default AnswerText;
