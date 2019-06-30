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

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        firestore
          .collection('users')
          .doc(resp.user.uid)
          .set({
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            initials: newUser.firstname[0] + newUser.lastname[0]
          });
      })
      .then(() => {
        dispatch({ type: 'SIGNUP SUCCESS' });
      })
      .catch(err => {
        dispatch({ type: 'SIGNUP ERR', payload: err.message });
      });
  };
};
