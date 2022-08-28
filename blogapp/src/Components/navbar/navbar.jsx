import React, { useContext } from 'react'
import "./navbar.css";
import myphoto from "./ajaj786.jpg"
import { Link } from 'react-router-dom';
// import { Context } from '../../context/Context';
import { Context } from "../../Pages/context/Context"; 
function Navbar() {
  const { user,dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const handleLogout = () =>{
    dispatch({type:"LOGOUT"});
  };

    return (
      <div className="nav">
        <div className="navleft">
          <a href="https://www.facebook.com/profile.php?id=100025474790122">
            <i className="Link socialIcon fab fa-facebook"></i>
          </a>
          <a href='https://www.instagram.com/ajaj_ahmad_ansari/'><i className="Link socialIcon fab fa-instagram"></i></a>
          <a href='https://www.linkedin.com/feed/?trk=IN-SEM_google-adwords_Jordan-brand-sign-up'><i className="Link socialIcon fab fa-linkedin"></i></a>
        </div>

        <div className="navcentre">
          <ul className="navlist">
            <li className="navlistitem">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="navlistitem">
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li className="navlistitem">
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
            <li className="navlistitem">
              <Link to="/write" className="link">
                Write
              </Link>
            </li>
            <li className="navlistitem" onClick={handleLogout}>
              {user && "Logout"}
            </li>
          </ul>
        </div>

        <div className="navright">
          {user ? (
            <Link to={"/settings"}>
              <img className="imgicon" src={PF + user.profilePic} alt="" />
            </Link>
          ) : (
            <ul className="navlist">
              <li className="navlistitem">
                <Link to="/login" className="link">
                  Login
                </Link>
              </li>
              <li className="navlistitem">
                <Link to="/register" className="link">
                  Register
                </Link>
              </li>
            </ul>
          )}

          {/* <i className="searchIcon fas fa-search"></i> */}
        </div>
      </div>
    );
}

export default Navbar;
