import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";

export const signup = (form) => async (dispatch) => {
  try {
    const res = await axios.post(
      `https://rekindle.herokuapp.com/api/register`,
      form
    );

    localStorage.setItem("token", res.data.token);

    setAuthToken(res.data.token);
  } catch (err) {
    console.error(err);
  }
};
