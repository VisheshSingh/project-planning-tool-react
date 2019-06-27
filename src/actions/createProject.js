export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call\
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .add({
        ...project,
        firstname: 'Net',
        lastname: 'Ninja',
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE', payload: project });
      })
      .catch(err => {
        dispatch({ type: 'CREATE PROJECT ERR', payload: err.message });
      });
  };
};
