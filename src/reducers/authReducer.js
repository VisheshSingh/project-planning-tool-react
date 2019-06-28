const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN ERR':
      console.log('Login Failed 😥');
      return {
        ...state,
        authError: 'Login failed'
      };
    case 'LOGIN SUCCESS':
      console.log('Hurray, login successful! 💕');
      return {
        ...state,
        authError: null
      };
    case 'SIGNOUT':
      console.log('LOG OUT Success 😊:)');
      return state;
    default:
      return state;
  }
};

export default authReducer;
