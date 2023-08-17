import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ChecklistStackParamList} from '../../navigation/type';

export type ChecklistItemProps = {
  item: any;
  index: number;
};

export type EditListProps = NativeStackScreenProps<
  ChecklistStackParamList,
  'EditList'
>;
