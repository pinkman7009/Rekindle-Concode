import axios from "axios";
import { GET_USER_INFO, LOGIN, LOGOUT } from "../types";
import setAuthToken from "../../utils/setAuthToken";

export const getUserInfo = () => async (dispatch) => {
  try {
    console.log("vivek");
    const res = await axios.get(`https://rekindle.herokuapp.com/api/login`);

    console.log({ res });

    dispatch({ type: GET_USER_INFO, payload: res });
  } catch (err) {
    console.error(err);
  }
};

export const login = (form) => async (dispatch) => {
  try {
    const res = await axios.post(
      `https://rekindle.herokuapp.com/api/login`,
      form
    );

    localStorage.setItem("token", res.data.token);

    setAuthToken(res.data.token);
    dispatch({ type: LOGIN, payload: res });
    dispatch(getUserInfo());
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("token");

    dispatch({ type: LOGOUT });
  } catch (err) {
    console.error(err);
  }
};
