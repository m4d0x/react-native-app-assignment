import { StyleProp, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-elements';
import { useToggle } from '../hooks/useToggle';

interface ThemedLikeButtonProps {
  theme: string;
  like: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const ThemedLikeButton: React.FC<ThemedLikeButtonProps> = ({ onPress, style }) => {
  const theme = useTheme();
  const [isLiked, toggleLike] = useToggle(false, (currentState) => !currentState, 'likeKey');

