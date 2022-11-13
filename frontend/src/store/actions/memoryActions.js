import axios from "axios";
import { GET_MEMORIES } from "../types";

export const getMemories = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://rekindle.herokuapp.com/api/memories`);

    dispatch({ type: GET_MEMORIES, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};
