export type SwipableComponentProps = {
  children: JSX.Element;
  done?: boolean;
  setOpen?: (e: boolean) => void | undefined;
  deletee?: boolean;
  skip?: boolean;
  submitted?: boolean;
  onPressDone?: () => void;
  personal?: boolean;
  onPressDelete?: () => void;
  uncheck?: boolean;
  onPressSubmitted?: () => void;
  onPressSkipped?: () => void;
};
