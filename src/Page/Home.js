// import React, { Component } from "react";

// class Home extends Component {
//   render() {
//     return <div>Homepage</div>;
//   }
// }

// export default Home;

import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getData } from "../redux/actions/dataActions";
import { Link } from "react-router-dom";

const Home = () => {
  const { dataUser } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData);
  }, []);

  console.log(dataUser);

  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/regis">
        <button>Register</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Home;
