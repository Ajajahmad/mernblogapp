import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import Profile from "./profile.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItems">
        <span className="sidebarTitles">ABOUT ME</span>
        <img className="myProfile" src={Profile} alt="Profile" />
        <br></br>
        <br></br>
        <p className="aboutDisc">
          <h4>
          Hello! I Am{" "}
          <span style={{ color: "purple", fontSize: "25px" }}> Ajaj Ahmad</span>
          .
        </h4>
        <h4 >I Created this website.</h4>
        <h4>I am a web developer.</h4>
        <h4>I am currently in NIT Agartala</h4>
        <h4>
          currently pursuing BTech with CSE as major.
        </h4>
        <h4 style={{color:"red"}}>This website is still under construction...</h4>
        </p>
      </div>
      <div className="sidebarItems">
        {/* <span className="sidebarTitles">CATEGORIES</span> */}
        <div>
          <ul className="listItems">
            {cats.map((c) => (
              <Link to={`/?cat=${c.name}`} className="link">
                <li className="listli">{c.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="sidebarItems">
        <span className="sidebarTitles ">FOLLOW ME</span>
        <div className="socialIconsTab">
          <a href="https://www.facebook.com/profile.php?id=100025474790122">
            <i className="Link socialIcon fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/ajaj_ahmad_ansari/">
            <i className="Link socialIcon fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/feed/?trk=IN-SEM_google-adwords_Jordan-brand-sign-up">
            <i className="Link socialIcon fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
