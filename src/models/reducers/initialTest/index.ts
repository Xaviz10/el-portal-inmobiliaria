import useHelpers from '../../../helpers';
import useStrings from '../../../strings';
import useInitialStates from '../../initialStates';

const useInitialTestReducers = () => {
  // Helpers
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  //strings
  const { useTypes } = useStrings();
  const { initialTestTypes } = useTypes();
  const { INITIAL } = initialTestTypes();

  //initial states
  const { useInitialTestStates } = useInitialStates();
  const { firstDummyState } = useInitialTestStates();

  //handlers
  const handler = {
    [INITIAL](state: Object) {
      return {
        ...state,
      };
    },
  };

  //reducers
  const dummyState = createReducer(firstDummyState, handler);

  return {
    dummyState,
  };
};

export default useInitialTestReducers;
