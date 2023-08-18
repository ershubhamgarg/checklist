import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

export const usePDListProgress = () => {
  const {pdList} = useSelector<RootState, any>(
    state => state.mychecklistreducer,
  );

  const total = useMemo(() => pdList[0]?.items.length, [pdList]);

  const completed = useMemo(
    () => pdList[0]?.items.filter((e: any) => e.completed).length,
    [pdList],
  );

  const progress = useMemo(() => completed / total, [completed, total]);

  return [progress];
};
