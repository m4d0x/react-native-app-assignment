import React, { useEffect, useState } from 'react';
import { Animated, Text } from 'react-native';

interface AnswerTextProps {
  text: string | null;
  fadeAnim: number;
}

const AnswerText: React.FC<AnswerTextProps> = ({ text, fadeAnim }) => {
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

  return (
    isVisible && (
      <Animated.View style={{ opacity: fade }}>
        <Text>{text}</Text>
      </Animated.View>
    )
  );
};

export default AnswerText;
