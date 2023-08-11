import {GestureResponderEvent} from 'react-native';

export type AppHeaderProps = {
  title?: string;
  children?: JSX.Element;
  onBackPress?: GestureResponderEvent;
  backLabel?: string;
};
