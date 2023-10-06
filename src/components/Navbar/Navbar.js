import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { Link } from "react-scroll";
import contactimg from "../../images/message-solid.svg";
import facebook from "../../images/facebook-icon.png";
import instagram from "../../images/instagram.png";

const Navbar = () => {
  const [divStyle, setDivStyle] = useState({
    height: "3rem",
    width: "12rem",
    position: "absolute",
    right: "13rem",
    background: "",
    transition: "all 0.5s",
  });
  const [showMenu, setShowMenu] = useState(false);
  const handelEnterMouse = () => {
    setDivStyle((prev) => ({
      ...prev,
      background: "rgb(30,30,30)",
      right: "0rem",
      color: "white",
    }));
  };

  const HandelLeaveMouse = () => {
    setDivStyle((prev) => ({
      ...prev,
      background: "",
      right: "13rem",
      color: "",
    }));
  };

  return (
    <nav className="navbar" style={{height:showMenu?'10rem':'5rem'}}>
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenueListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenueListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenueListItem"
        >
          Portfolio
        </Link>
        {/* <Link activeClass='active' to=''  spy={true} smooth={true} offset={-100} duration={500} className="desktopMenueListItem">Clients</Link> */}
      </div>
      <div className="desktopMenuSocial">
        <a href="https://www.facebook.com/pranav.srivastav.73">
          <img src={facebook} alt="" className="link" />
        </a>
        <a href="https://www.instagram.com/srivastava_pranav_/">
          <img src={instagram} alt="" className="link" />
        </a>
        <a href="https://www.linkedin.com/in/pranavssrivastava/">
          <div className="linkedin">in</div>
        </a>
      </div>
      <button
        className="desktopMenuBtn"
        onMouseEnter={handelEnterMouse}
        onMouseLeave={HandelLeaveMouse}
        onClick={() =>
          document
            .getElementById("contactPage")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        <div style={divStyle} />
        <img src={contactimg} alt="contactimg" className="desktopMenuImg" />
        <div style={{ color: divStyle.color, zIndex: "3" }}>Contact Me!</div>
      </button>
      <div className="menuicon" onClick={() => setShowMenu(!showMenu)}>
        <span style={{transform:showMenu?'rotateZ(45deg)':'rotateZ(0deg)',margin:!showMenu?'1rem':'0', transition:'all 0.3s'}}></span>
        <span style={{transform:showMenu?'rotateZ(-45deg)':'rotateZ(0deg)',margin:!showMenu?'1rem':'0', transition:'all 0.3s'}}></span>
      </div>
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
