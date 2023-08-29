import React from "react";
import "./Work.css";
import portfolio3 from "../../images/portfolio-1.png";
import portfolio2 from "../../images/portfolio-4.png";
import portfolio1 from "../../images/portfolio-6.png";

const skills = [
  {
    key: 1,
    img: portfolio1,
    title: "Task Management App",
    content:
      "Create a task management application where users can create, update, and delete tasks. You can implement features like task categorization, due dates, priority levels, and the ability to mark tasks as completed. Use Redux to manage the state of tasks and their various attributes",
  },
  {
    key: 2,
    img: portfolio2,
    title: "E-commerce Platform",
    content:
      "Build an e-commerce platform with features like product listing, search, product details, shopping cart, and user authentication. Use Redux to manage the shopping cart state and user authentication status across different components",
  },
  {
    key: 3,
    img: portfolio3,
    title: "Note taking App",
    content:
      "Create a note-taking application where users can create, edit, and delete notes. You can enhance the app with features like rich text formatting, categorization, and synchronization across devices. Redux can be used to manage the state of notes and their metadata",
  },
];

const Work = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        👋 Welcome to my React web portfolio, where creativity meets
        functionality. Dive into a collection of web projects that blend sleek
        design with seamless user experiences. From responsive layouts to
        intuitive components, each piece reflects my commitment to pushing the
        boundaries of modern web development.
      </span>
      <div className="worksImgs">
        {skills.map((skill) => {
          return (
            <div className="worksDetails">
              <span className="hovermee">Hover Me!</span>
              <img src={skill.img} alt={skill.title} className="worksImg" />
              <div className="worksDetail">
                <h2>{skill.title}</h2>
                <p>{skill.content}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <button className="worksBtn">See More</button> */}
    </section>
  );
};

export default Work;
