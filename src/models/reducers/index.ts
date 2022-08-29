import { combineReducers } from 'redux';
import useInitialTestReducers from './initialTest';

const useReducers = () => {
  const { dummyState } = useInitialTestReducers();
  return combineReducers({
    dummyState,
  });
};

export default useReducers;
