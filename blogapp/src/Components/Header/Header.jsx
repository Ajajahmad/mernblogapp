import React from 'react';
import "./Header.css";
import HeaderImage from "./nature.jpg";

function Header() {
    return (
      <div className="header">
        <div className="heading">
          <span className="headingsm">React & Node</span>
          <span className="headinglg">Blog</span>
        </div>
        <div>
          <img className="headerImage" src={HeaderImage} alt="nature" />
        </div>
      </div>
    );
}

export default Header
