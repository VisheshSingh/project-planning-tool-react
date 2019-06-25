export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call
    dispatch({ type: 'CREATE', payload: project });
  };
};
