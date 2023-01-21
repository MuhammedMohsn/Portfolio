import React, { Fragment } from "react";
import "./Experience.css";
import { HiOutlineBadgeCheck } from "react-icons/hi";
function Experience() {
  return (
    <Fragment>
      <section id="experience">
        <h4>What skills i have </h4>
        <h2>My experience</h2>
        <div className="container experience_container">
          <div className="frontend_experience">
            <h3>FrontEnd development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <HiOutlineBadgeCheck className="experience_details_icon" />
                <div>
                  <h3>HTML</h3>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <HiOutlineBadgeCheck className="experience_details_icon" />
                <div>
                  <h3>CSS</h3>
                  <small className="text-light">Experienced</small>
                </div>
              </article>{" "}
              <article className="experience_details">
                <HiOutlineBadgeCheck className="experience_details_icon" />
                <div>
                  <h3>JS</h3>
                  <small className="text-light">Experienced</small>
                </div>
              </article>{" "}
              <article className="experience_details">
                <HiOutlineBadgeCheck className="experience_details_icon" />
                <div>
                  <h3>Bootstrap</h3>
                  <small className="text-light">Experienced</small>
                </div>
              </article>{" "}
              <article className="experience_details">
                <HiOutlineBadgeCheck className="experience_details_icon" />
                <div>
                  <h3>React</h3>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <HiOutlineBadgeCheck className="experience_details_icon" />
                <div>
                  <h3>Redux</h3>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <HiOutlineBadgeCheck className="experience_details_icon" />
                <div>
                  <h3>SASS</h3>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <HiOutlineBadgeCheck className="experience_details_icon" />
                <div>
                  <h3>Next</h3>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <HiOutlineBadgeCheck className="experience_details_icon" />
                <div>
                  <h3>TypeScript</h3>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <HiOutlineBadgeCheck className="experience_details_icon" />
                <div>
                  <h3>Material UI</h3>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>
          <div className="backend_experience">
            <h3>BackEnd development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <HiOutlineBadgeCheck className="experience_details_icon" />
                <div>
                  <h3>Node JS</h3>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>{" "}
              <article className="experience_details">
                <HiOutlineBadgeCheck className="experience_details_icon" />
                <div>
                  <h3>Postgresql</h3>
                  <small className="text-light">Experienced</small>
                </div>
              </article>{" "}
              <article className="experience_details">
                <HiOutlineBadgeCheck className="experience_details_icon" />
                <div>
                  <h3>MySQL</h3>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>{" "}
              <article className="experience_details">
                <HiOutlineBadgeCheck className="experience_details_icon" />
                <div>
                  <h3>Data structures</h3>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <HiOutlineBadgeCheck className="experience_details_icon" />
                <div>
                  <h3>MongoDB</h3>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <HiOutlineBadgeCheck className="experience_details_icon" />
                <div>
                  <h3>Rest API</h3>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <HiOutlineBadgeCheck className="experience_details_icon" />
                <div>
                  <h3>GraphQL</h3>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Experience;
