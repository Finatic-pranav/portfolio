import React from "react";
import "./Intro.css";
import bg from "../../images/my_image.png";
import btnImg from "../../images/download_font.svg";
import btnImg2 from "../../images/hireme.png";
import cd from "../../images/Pranav_srivastava_Resume.png";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Intro = () => {
  const onButtonClick = () => {
    fetch("PranavSrivastavaResume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "PranavSrivastavaResume.pdf";
        alink.click();
      });
    });
  };
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'M <span className="introName">Pranav Srivastava</span>
          <br />
          <Typed
            strings={["Web Designer", "MERN Stack Developer", "Coder"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          ></Typed>
        </span>
        <p className="introPara">
          Results-driven Full-Stack MERN Developer with a passion for
          translating business <br />
          requirements into technical solutions, and adept at collaborating in
          cross-functional <br /> teams to deliver high-quality projects on
          time.
        </p>
        <div className="introButton">
          <Link to="contactPage" smooth={true}>
            <button className="btn">
              <img src={btnImg2} alt="" className="btnImg" />
              Hire me <span className="btnEffect"></span>
            </button>
          </Link>
          <button className="btn" onClick={onButtonClick}>
            <img src={btnImg} alt="" className="btnImg" />
            Download CV <span className="btnEffect"></span>
          </button>
        </div>
      </div>
      <img src={bg} alt="image" className="bg" />
    </section>
  );
};

export default Intro;
