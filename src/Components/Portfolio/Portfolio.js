import React, { Fragment } from "react";
import "./Portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/portfolio6.jpg";

function Portfolio() {
  let data = [
    {
      id: 1,
      image: img1,
      title: " Movies-React-app",
      github: "https://github.com/MuhammedMohsn/Movies-React-app",
      demo: "https://muhammedmohsn.github.io/Movies-React-app/",
    },
    {
      id: 2,
      image: img2,
      title: "Safety-Guard-page",
      github: "https://github.com/MuhammedMohsn/Safety-Guard-page",
      demo: "https://muhammedmohsn.github.io/Safety-Guard-page/",
    },
    {
      id: 3,
      image: img3,
      title: "E-Commerce",
      github: "https://github.com/MuhammedMohsn/E-Commerce",
      demo: "https://muhammedmohsn.github.io/E-Commerce/",
    },
    {
      id: 4,
      image: img4,
      title: "CRUD-operations-app",
      github: "https://github.com/MuhammedMohsn/CRUD-operations-app",
      demo: "https://muhammedmohsn.github.io/CRUD-operations-app/",
    },
  ];
  return (
    <Fragment>
      <section>
        <h3>My recent work</h3>
        <h2>Portflio</h2>
        <div className="container portfolio_container">
          {data.map((item) => {
            let { id, title, demo, github, image } = item;
            return (
              <article className="portfolio_item" key={id}>
                <div className="portfolio_item_img">
                  <img src={image} alt="" />
                </div>
                <h2> {title}</h2>
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </article>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
}

export default Portfolio;
