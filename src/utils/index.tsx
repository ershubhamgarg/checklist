import {useSelector} from 'react-redux';
import {RootState} from '../store';

export const usePDListProgress = () => {
  const {pdList} = useSelector((state: RootState) => state.mychecklistreducer);

  let total = pdList[0]?.items.length;
  let completed = pdList[0]?.items.filter((e: any) => e.completed).length;
  let progress = completed / total;
  return [progress];
};
