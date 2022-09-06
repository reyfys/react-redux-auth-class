import TYPES from "../types";
import axios from "axios";

export const getDataRegis = (email, password) => (dispatch) => {
  const payload = {
    email: email,
    password: password,
  };

  axios
    .post("https://reqres.in/api/register", payload)
    .then((res) => {
      console.log(res);
      dispatch({
        type: TYPES.POST_REGIS,
        payload: res.data.token,
      });
    })
    .catch((err) => console.log(err));
};
