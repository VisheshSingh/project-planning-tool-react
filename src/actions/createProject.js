export const createProject = project => {
  return (dispatch, getState) => {
    // make async call
    dispatch({ type: 'CREATE', payload: project });
  };
};
