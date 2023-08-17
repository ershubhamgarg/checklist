export type ChecklistItemProps = {
  item: any;
  index: number;
  input?: any;
  text?: string;
  onChange?: () => void;
  onPressDelete?: () => void;
  onPressDone?: () => void;
};
