import {
  REGISTER_SUCCESS,
  //   REGISTER_FAILREGISTER_SUCCESS,
  //   USER_LOADEDREGISTER_SUCCESS,
  //   AUTH_ERRORREGISTER_SUCCESS,
  //   LOGIN_SUCCESSREGISTER_SUCCESS,
  //   LOGIN_FAILREGISTER_SUCCESS,
  //   LOGOUTREGISTER_SUCCESS,
  //   CLEAR_ERRORSREGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_CONTACTS,
  CLEAR_ERRORS,
  USER_LOADED,
  AUTH_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthnticated: true,
        loading: false,
        user: action.payload
      };
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthnticated: true,
        loading: false
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthnticated: false,
        loading: false,
        user: null,
        error: action.payload
      };
    case CLEAR_ERRORS:
      return {
        error: null
      };
    default:
      return state;
  }
};
