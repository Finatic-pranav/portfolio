import React, { useState } from "react";
import "./skills.css";
import uidesign from "../../images/ui-design.png";
import webDesign from "../../images/website-design.png";
import reactpng from "../../images/react_icon.png";
import mongopng from "../../images/mongodb_icon.png";
import nodepng from "../../images/nodejs_icon.png";
import bootstrappng from "../../images/Bootstrap_icon.png";
import tailwindpng from "../../images/tailwindI_icon.png";
import csspng from "../../images/css_icon.png";
import htmlpng from "../../images/html_icon.png";
import reduxpng from "../../images/redux_icon.png";
import ejspnj from "../../images/ejs_icon.png";
import jquerypng from "../../images/jquery_icon.png";
import javascriptpng from "../../images/javascript_icon.png";
import pythonpng from "../../images/python_icon.png";
import expresspng from "../../images/express_icon.png";

const Skills = () => {
  const [skillDesign, setSkillDesign] = useState({
    UI: false,
    Web: false
  });

  const handelClick = (abc) => {
    if (abc === "UI") {
      if (skillDesign.UI === false) {
        setSkillDesign({
          UI: true,
          Web: false
        });
      } else {
        setSkillDesign({
          UI: false,
          Web: false
        });
      }
    } else if (abc === "Web") {
      if (skillDesign.Web === false) {
        setSkillDesign({
          UI: false,
          Web: true
        });
      } else {
        setSkillDesign({
          UI: false,
          Web: false
        });
      }
    }
  };

  return (
    <section id="skills">
      <h2 className="skillTitle">What I do</h2>
      <span className="skilDesc">
        🌱I'm committed to staying up-to-date with the latest trends in web
        development, constantly striving to enhance my skill set and contribute
        more effectively to the ever-evolving tech landscape
      </span>
      <div className="skillBars">
        <div
          onClick={(e) => handelClick("UI")}
          name="UI"
          style={{}}
          className="skillBar"
        >
          <span
            name="UI"
            style={{
              width: skillDesign.UI !== false && "0px",
              height: skillDesign.UI !== false && "0px",
            }}
            className="skillBarEffect"
          >
            Click Me
          </span>
          <img
            src={uidesign}
            alt="uidesign"
            name="UI"
            className="skillBarImg"
          />
          <div className="skillBarText" name="UI">
            <h2 name="UI"> UI/UX Design</h2>
            <p name="UI">
              Creating visually engaging and interactive elements for effective
              user interaction and user journeys through research-driven design
              decisions.
            </p>
            <div style={{display:skillDesign.UI !== false ? "flex":'None'}}>
              <div className="skillBarIconDivs">
                <div className="skillBarIconDiv">
                  <img src={bootstrappng} alt="" />
                </div>
                BootStrap
              </div>
              <div className="skillBarIconDivs">
                <div className="skillBarIconDiv">
                  <img src={tailwindpng} alt="" />
                </div>
                Tailwind
              </div>
              <div className="skillBarIconDivs">
                <div className="skillBarIconDiv">
                  <img src={csspng} alt="" />
                </div>
                CSS3
              </div>
              <div className="skillBarIconDivs">
                <div className="skillBarIconDiv">
                  <img src={htmlpng} alt="" />
                </div>
                HTML5
              </div>
            </div>
          </div>
        </div>






        <div
          onClick={(e) => handelClick("Web")}
          name="Web"
          style={{}}
          className="skillBar"
        >
          <span
            style={{
              width: skillDesign.Web !== false && "0px",
              height: skillDesign.Web !== false && "0px",
            }}
            className="skillBarEffect"
          >
            Click Me
          </span>
          <img src={webDesign} alt="webDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2> WebSite Design</h2>
            <p>
              Designing websites that blend aesthetic appeal with user-friendly
              functionality for optimal online experiences.
            </p>
            <div style={{display:skillDesign.Web !== false ? "flex":'None'}}>
              <div className="skillBarIconDivs">
                <div className="skillBarIconDiv">
                  <img src={reactpng} alt="" />
                </div>
                React
              </div>
              <div className="skillBarIconDivs">
                <div className="skillBarIconDiv">
                  <img src={reduxpng} alt="" />
                </div>
                Redux-Toolkit
              </div>
              <div className="skillBarIconDivs">
                <div className="skillBarIconDiv">
                  <img src={javascriptpng} alt="" />
                </div>
                JavaScript
              </div>
              <div className="skillBarIconDivs">
                <div className="skillBarIconDiv">
                  <img src={ejspnj} alt="" />
                </div>
                Ejs
              </div>
              <div className="skillBarIconDivs">
                <div className="skillBarIconDiv">
                  <img src={nodepng} alt="" />
                </div>
                Node.js
              </div>
              <div className="skillBarIconDivs">
                <div className="skillBarIconDiv">
                  <img src={expresspng} alt="" />
                </div>
                Express.js
              </div>
              <div className="skillBarIconDivs">
                <div className="skillBarIconDiv">
                  <img src={mongopng} alt="" />
                </div>
                MongoDb
              </div>
              <div className="skillBarIconDivs">
                <div className="skillBarIconDiv">
                  <img src={pythonpng} alt="" />
                </div>
                Python
              </div>
              <div className="skillBarIconDivs">
                <div className="skillBarIconDiv">
                  <img src={jquerypng} alt="" />
                </div>
                Jquery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
