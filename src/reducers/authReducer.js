const initState = {
    authError: null,
    user: JSON.parse(localStorage.getItem('user')) !== undefined ? JSON.parse(localStorage.getItem('user')) : null
}
  
  const authReducer = (state = initState, action) => {
    switch (action.type) {
      case 'SIGNUP_SUCCESS':
        return {
          ...state,
          user: action.res.user,
          authError: null,
        }
      case 'SIGNUP_ERROR':
        return {
          ...state,
          authError: Object.keys(action.err.response.data.errors)[0],
        }
      case 'LOGIN_SUCCESS':
        localStorage.setItem('user', JSON.stringify((action.res.data)));
        console.log(JSON.parse(localStorage.getItem('user')));
        return {
          ...state,
          authError: null,
          user: action.res.data,
        }
  
      default:
        return state
    }
  };
  
  export default authReducer;