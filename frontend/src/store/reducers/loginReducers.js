import { GET_USER_INFO, LOGIN, LOGOUT } from "../types";

export const loginReducer = (user = null, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return action.payload.data;
    default:
      return user;
  }
};

export const tokenReducer = (token = null, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload.data.token;
    case LOGOUT:
      return null;
    default:
      return token;
  }
};
