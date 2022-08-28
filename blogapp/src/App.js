import React, { Component, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/navbar/navbar";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

// import { Context } from "./context/Context";
import {Context} from "../src/Pages/context/Context";
function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/about" element={ <About/>}></Route>
          <Route exact path="/register" element={user? <Home/>:<Register />}></Route>
          <Route exact path="/login" element={user? <Home/>:<Login />}></Route>
          <Route exact path="/write" element={user? <Write/>:<Register />}></Route>
          <Route exact path="/settings" element={user? <Settings/>:<Register />}></Route>
          <Route exact path="/post/:postId" element={<Single />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
