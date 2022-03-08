import {
  REGISTER_PENDING,
  REGISTER_SUCCESS,
  REGISTER_FAILD,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
} from "./types";

import api from "../../../axiosConfig";

export const register = (userData) => async (dispatch) => {
  dispatch({
    type: REGISTER_PENDING,
  });

  try {
    const { data } = await api.post("users", userData);
    dispatch({ type: REGISTER_SUCCESS });
  } catch (error) {
    console.log(error.data);
    dispatch({ type: REGISTER_FAILD, payload: error.data });
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch({
    type: LOGIN_PENDING,
  });

  try {
    const { data } = await api.post("login", userData);
    console.log(data)
    dispatch({ type: LOGIN_SUCCESS });
  } catch (error) {
    console.log(error.data);
    dispatch({ type: LOGIN_FAILED, payload: error.data });
  }
};


export const logout  = () => (dispatch)  => {

  dispatch({ type: LOGOUT });
}