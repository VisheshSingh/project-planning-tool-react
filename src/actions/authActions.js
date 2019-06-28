export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    // make async call
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: 'LOGIN SUCCESS' });
      })
      .catch(err => {
        dispatch({ type: 'LOGIN ERR', err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    // make async call
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT' });
      });
  };
};
