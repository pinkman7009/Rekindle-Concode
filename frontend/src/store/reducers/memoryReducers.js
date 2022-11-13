import { GET_MEMORIES } from "../types";

export const memoryReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MEMORIES:
      return action.payload;
    default:
      return state;
  }
};
