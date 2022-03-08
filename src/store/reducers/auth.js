import {
  REGISTER_PENDING,
  REGISTER_SUCCESS,
  REGISTER_FAILD,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
} from "../actions/auth/types";

// initial state of the auth store
let initialState = {
  loading: false,
  isRegistred: false,
  isLoggedIn:false
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_PENDING:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, isRegistred: true };
      case LOGIN_PENDING:
        return { ...state, loading: true };
      case LOGIN_SUCCESS:
        return { ...state, loading: false, isLoggedIn: true };
        case LOGOUT:
          return { ...state,isLoggedIn: false};
    default:
      return state;
  }
};

export default authReducer;
