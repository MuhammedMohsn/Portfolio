import React, { Fragment } from "react";
import "./Experience.css";
import { HiOutlineBadgeCheck } from "react-icons/hi";
function Experience() {
  const experiences = {
    frontend: {
      title: "FrontEnd development",
      skills: [
        { name: "HTML", level: "Experienced" },
        { name: "CSS", level: "Experienced" },
        { name: "JS", level: "Experienced" },
        { name: "Bootstrap", level: "Experienced" },
        { name: "React", level: "Experienced" },
        { name: "Redux", level: "Experienced" },
        { name: "React-Query", level: "Intermediate" },
        { name: "SASS", level: "Experienced" },
        { name: "Next", level: "Intermediate" },
        { name: "Angular", level: "Intermediate" },
        { name: "TypeScript", level: "Experienced" },
        { name: "Material UI", level: "Intermediate" },
      ],
    },
    backend: {
      title: "BackEnd development",
      skills: [
        { name: "Node JS", level: "Intermediate" },
        { name: "PostgreSQL", level: "Experienced" },
        { name: "MySQL", level: "Intermediate" },
        { name: "Data structures", level: "Experienced" },
        { name: "MongoDB", level: "Experienced" },
        { name: "Rest API", level: "Experienced" },
        { name: "GraphQL", level: "Experienced" },
      ],
    },
  };
  return (
    <Fragment>
      <section id="experience">
        <h4>What skills i have </h4>
        <h2>My experience</h2>
        <div className="container experience_container">
          {Object.entries(experiences).map(([key, section]) => (
            <div key={key} className={`${key}_experience`}>
              <h3>{section.title}</h3>
              <div className="experience_content">
                {section.skills.map((skill, index) => (
                  <article key={index} className="experience_details">
                    <HiOutlineBadgeCheck className="experience_details_icon" />
                    <div>
                      <h3>{skill.name}</h3>
                      <small className="text-light">{skill.level}</small>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
}

export default Experience;
