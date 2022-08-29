const useInitialTestStates = (): { [key: string]: Object } => {
  const firstDummyState = {
    key1: '',
    key2: '',
  };
  const secondfDummyState = {
    key3: '',
    key4: false,
  };

  return {
    firstDummyState,
    secondfDummyState,
  };
};

export default useInitialTestStates;
