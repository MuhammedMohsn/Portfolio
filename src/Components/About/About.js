import React, { Fragment } from "react";
import "./About.css";
import me from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolder } from "react-icons/vsc";
function About() {
  return (
    <Fragment>
      <section id="about">
        <h3>Get to know</h3>
        <h2>About Me</h2>
        <div className="container about_container">
          <div className="about_me">
            <div className="about_me_img">
              <img src={me} alt="me" />
            </div>
          </div>
          <div className="about_content">
            <div className="about_cards">
              <a className="about_card" href="#experience">
                <FaAward className="about_icon" />
                <h2>experience</h2>
                <small> +2 Years </small>
              </a>
              <a className="about_card" href="#portfolio">
                <VscFolder className="about_icon" />
                <h2>projects</h2>
                <small> 10+ projects</small>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default About;
