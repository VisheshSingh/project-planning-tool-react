export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call\
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    firestore
      .collection('projects')
      .add({
        ...project,
        firstname: profile.firstname,
        lastname: profile.lastname,
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
