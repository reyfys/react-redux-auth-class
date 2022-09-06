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
      <Link to="/regis">
        <button>Registration</button>
      </Link>
      <button>Homepage</button>
    </div>
  );
};

export default Home;
