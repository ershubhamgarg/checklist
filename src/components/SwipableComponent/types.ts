export type SwipableComponentProps = {
  children: JSX.Element;
  done?: boolean;
  setOpen?: () => void | undefined;
  deletee?: boolean;
  skip?: boolean;
  submitted?: boolean;
  onPressDone?: () => void;
  personal?: boolean;
  onPressDelete?: () => void | undefined;
  uncheck?: boolean;
  onPressSubmitted?: () => void | undefined;
  onPressSkipped?: () => void | undefined;
};
