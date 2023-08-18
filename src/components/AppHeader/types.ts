import {ViewStyle} from 'react-native';

export type AppHeaderProps = {
  title?: string;
  children?: JSX.Element | null;
  onBackPress?: () => void;
  backLabel?: string;
  backButtonBackgroundStyle?: ViewStyle;
  onCancelPress?: () => void;
};
