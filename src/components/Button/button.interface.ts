import {TouchableOpacityProps} from 'react-native';

export interface ButtonInterface extends TouchableOpacityProps {
  text: string;
  color?: string;
  textColor?: string;
}
