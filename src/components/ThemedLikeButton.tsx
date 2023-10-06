// ThemedLikeButton.tsx
import React from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { useTheme } from '../contexts/ThemeContext';
import { useToggle } from '../hooks/useToggle';

interface ThemedLikeButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const ThemedLikeButton: React.FC<ThemedLikeButtonProps> = ({
  onPress,
  style,
}) => {
  const { theme } = useTheme();
  const [isLiked, toggleLike] = useToggle(
    false,
    (currentState) => !currentState,
    'likeKey',
  );

  const handlePress = () => {
    toggleLike();
    onPress();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={style}>
      <AntDesign
        name={isLiked ? 'hearto' : 'heart'}
        size={24}
        color={
          isLiked
            ? theme.colors.toggleActiveColor
            : theme.colors.toggleActiveColor
        }
      />
    </TouchableOpacity>
  );
};

export default ThemedLikeButton;
