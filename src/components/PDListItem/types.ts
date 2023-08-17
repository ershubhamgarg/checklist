export type PDlistItemProps = {
  item: any;
  index: number;
  onPressSubmitted?: (e: any) => void;
  onPressSkipped?: (e: any) => void;
  onPressDone?: (e: any) => void;
};
