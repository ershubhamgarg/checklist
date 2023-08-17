export type PDlistItemProps = {
  item: any;
  index: number;
  onPressSubmitted?: () => void;
  onPressSkipped?: () => void;
  onPressDone?: () => void;
};
