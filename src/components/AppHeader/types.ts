import {ViewStyle} from 'react-native';

export type AppHeaderProps = {
  title?: string;
  children?: JSX.Element;
  onBackPress?: () => void;
  backLabel?: string;
  backButtonBackgroundStyle?: ViewStyle;
  onCancelPress?: () => void;
};
