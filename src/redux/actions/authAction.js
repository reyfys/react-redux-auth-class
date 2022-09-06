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

export const getDataLogin = (email, password) => (dispatch) => {
  const payload = {
    email: email,
    password: password,
  };
  axios
    .post("https://reqres.in/api/login", payload)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: TYPES.POST_LOGIN, payload: res.data.token });
    })
    .catch((err) => console.log(err));
};
