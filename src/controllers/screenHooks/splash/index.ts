import { useEffect } from 'react';
import useActions from '../../../api/actions';

const useSplash = () => {
  const { dispatch, useInitialTestActions } = useActions();
  const { actSetInitial } = useInitialTestActions();

  useEffect(() => {
    dispatch(actSetInitial() as any);
  }, []);
  console.log('Use Splash');
  return {};
};

export default useSplash;
