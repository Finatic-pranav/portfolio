import React, { useRef, useState } from "react";
import "./Contact.css";
import facebook from "../../images/facebook-icon.png";
import instagram from "../../images/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [send, setSend] = useState(0);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_iq34s63",
        "template_qubydgl",
        form.current,
        "j7lexVYrIb1cpPQWs"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setSend(1)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h2 className="conatctPageTitle">Contact Me</h2>
        <span className="contactDesc">
          Please fill out the below form to discuss any work opportunities
        </span>
        <form className="conatactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your email"
            name="from_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button
            onMouseLeave={() => setSend(0)}
            className="submitBtn"
            type="submit"
            value="send"
          >
            <p style={{zIndex:'4',display: send ? "None" : "" }}>Submit</p>
            <p style={{zIndex:'4',display: send ? "" : "None" }}>Sent!</p>
          </button>
          <div className="links">
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
        </form>
      </div>
    </section>
  );
};

export default Contact;
