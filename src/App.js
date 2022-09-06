import logo from "./logo.svg";
import "./App.css";
import Home from "./Page/Home";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./Page/Register";
import Login from "./Page/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regis" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
