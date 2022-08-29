import { useDispatch } from 'react-redux';
import useInitialTestActions from './initialTest';

const useActions = () => {
  const dispatch = useDispatch();
  return {
    dispatch,
    useInitialTestActions,
  };
};

export default useActions;
