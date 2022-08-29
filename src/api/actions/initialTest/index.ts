import useStrings from '../../../strings';

const useInitialTestActions = () => {
  // Strings
  const { useTypes } = useStrings();
  const { initialTestTypes } = useTypes();
  const { INITIAL } = initialTestTypes();

  // Services

  const actSetInitial =
    (onSuccess?: Function, onError?: Function) =>
    async (dispatch: Function) => {
      try {
        dispatch({
          type: INITIAL,
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };

  return {
    actSetInitial,
  };
};
export default useInitialTestActions;
