import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <h1 className="contactTitle">To Contact</h1>
        <h4 className="contactDesc">
          I am Ajaj Ahmad, the developer of this website
        </h4>
        <h4 className="contactDesc">React Out to me: </h4>
        <h3 className="contactDesc">
          Email: <span style={{ color: "brown" }}>ajaj121ahmad@gmail.com</span>
        </h3>
        <br className="contactDesc"></br>
        <h4 className="contactDesc">Follow me on socials:</h4>
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
    </>
  );
}
