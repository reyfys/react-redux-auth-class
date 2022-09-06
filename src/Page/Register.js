import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataRegis } from "../redux/actions/authAction";

const Register = () => {
  const dispatch = useDispatch();
  const { authReducer } = useSelector((state) => state);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(getDataRegis(email, password));
  };

  console.log(authReducer);

  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => handleChangeEmail(e)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => handleChangePassword(e)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {!!authReducer.token.length && (
        <p>Pendafataran Berhasil, token anda : {authReducer.token}</p>
      )}
    </div>
  );
};

export default Register;
