export type ChecklistItemProps = {
  item: any;
  index: number;
  input?: any;
  text?: string;
  onChange?: (e: any) => void;
  onPressDelete?: (e: any) => void;
  onPressDone?: (e: any) => void;
};
