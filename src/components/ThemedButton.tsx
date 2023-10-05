import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useToggle } from '../hooks/useToggle';

interface ThemedLikeButtonProps {
  theme: string;
  like: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const ThemedLikeButton: React.FC<ThemedLikeButtonProps> = ({
  onPress,
  style,
}) => {
  const theme = useTheme();
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
        name={isLiked ? 'heart' : 'hearto'}
        size={24}
        color={isLiked ? theme.toggleActiveColor : theme.toggleInactiveColor}
      />
    </TouchableOpacity>
  );
};
