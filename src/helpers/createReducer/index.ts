const useCreateReducer = () => {
  const createReducer =
    (
      initialState: Object,
      handler: {
        [key: string]: Function;
      }
    ) =>
    (state = initialState, action: { type: string }) =>
      handler?.hasOwnProperty(action.type)
        ? handler[action.type as keyof Object](state, action)
        : state;
  return {
    createReducer,
  };
};

export default useCreateReducer;
