import React, { Fragment } from "react";
import "./Portfolio.css";
import img1 from "../../assets/Movies.png";
import img2 from "../../assets/Foods.png";
import img3 from "../../assets/E-commerce.png";
import img4 from "../../assets/Weather.png";
import img5 from "../../assets/CRUD.png";
import img6 from "../../assets/Dashboard.png";
import img7 from "../../assets/Form_Validation.png";
import img8 from "../../assets/Tours.png";
import img9 from "../../assets/Wikipedia.png";
import img10 from "../../assets/Clocks.png";
import img11 from "../../assets/Safety.png";
import img12 from "../../assets/Groovin.png";
import img13 from "../../assets/Coffee.png";
import img14 from "../../assets/Best.png";
import img15 from "../../assets/Booth.png";
import img16 from "../../assets/Birthdays.png";
import img17 from '../../assets/Image_API.png'
import img18 from '../../assets/Storefront_API.png'
import img19 from '../../assets/Books_db.png'
import img20 from '../../assets/W.png'
import img21 from '../../assets/Pargraphs_generator.png'
import img22 from '../../assets/Products.png'
import img23 from '../../assets/To_do.png'

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
      title: "Foods_Website",
      github: "https://github.com/MuhammedMohsn/Foods_website",
      demo: "https://muhammedmohsn.github.io/Foods_website/",
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
      title: "Weathers_Website",
      github: "https://github.com/MuhammedMohsn/Weather_Website",
      demo: "https://muhammedmohsn.github.io/Weather_Website/",
    },
    {
      id: 5,
      image: img5,
      title: "CRUD-operations-app",
      github: "https://github.com/MuhammedMohsn/CRUD-operations-app",
      demo: "https://muhammedmohsn.github.io/CRUD-operations-app/",
    },
    {
      id: 6,
      image: img6,
      title: "Dashboard",
      github: "https://github.com/MuhammedMohsn/Dashboard-Project",
      demo: "https://muhammedmohsn.github.io/Dashboard-Project/",
    },
    {
      id: 7,
      image: img7,
      title: "Form_Validation",
      github: "https://github.com/MuhammedMohsn/Form-Validation",
      demo: "https://muhammedmohsn.github.io/Form-Validation/",
    },
    {
      id: 8,
      image: img8,
      title: "Tours-app",
      github: "https://github.com/MuhammedMohsn/Tours",
      demo: "https://muhammedmohsn.github.io/Tours/",
    },
    {
      id: 9,
      image: img9,
      title: "Wikepedia",
      github: "https://github.com/MuhammedMohsn/Wikipedia",
      demo: "https://muhammedmohsn.github.io/Wikipedia/",
    },
    {
      id: 10,
      image: img10,
      title: "Digital and Analog clocks",
      github: "https://github.com/MuhammedMohsn/Digital-and-Analog-clocks",
      demo: "https://muhammedmohsn.github.io/Digital-and-Analog-clocks/",
    },
    {
      id: 11,
      image: img11,
      title: "Safety-guard website",
      github: "https://github.com/MuhammedMohsn/Safety-Guard-page",
      demo: "https://muhammedmohsn.github.io/Safety-Guard-page/",
    },
    {
      id: 12,
      image: img12,
      title: "Groovin",
      github: "https://github.com/MuhammedMohsn/Groovin",
      demo: "https://muhammedmohsn.github.io/Groovin/",
    },
    {
      id: 13,
      image: img13,
      title: "Coffee-page",
      github: "https://github.com/MuhammedMohsn/Coffee-Page",
      demo: "https://muhammedmohsn.github.io/Coffee-Page/",
    },
    {
      id: 14,
      image: img14,
      title: "Best-app",
      github: "https://github.com/MuhammedMohsn/Best-app",
      demo: "https://muhammedmohsn.github.io/Best-app/",
    },
    {
      id: 15,
      image: img15,
      title: "Booth",
      github: "https://github.com/MuhammedMohsn/Booth",
      demo: "https://muhammedmohsn.github.io/Booth/",
    },
    {
      id: 16,
      image: img16,
      title: "Birthdays-reminder",
      github: "https://github.com/MuhammedMohsn/Birthdays-reminder-project",
      demo: "https://muhammedmohsn.github.io/Birthdays-reminder-project/",
    },
    {
      id: 17,
      image: img17,
      title: "Image_API",
      github: "https://github.com/MuhammedMohsn/Image_API",
      demo: "https://drive.google.com/file/d/1eCsR8HZsW8OQ3QoyOQytwoMaQBy50GgP/view?usp=sharing",
    },
    {
      id: 18,
      image: img18,
      title: "StoreFront-API",
      github: "https://github.com/MuhammedMohsn/StoreFront_API",
      demo: "https://drive.google.com/file/d/1qm166nSc81cm1GOZc_8Wr8Q37pMhEAXF/view?usp=sharing",
    },
      {
        id: 19,
        image: img19,
        title: "Books_DB",
        github: "https://github.com/MuhammedMohsn/Books_db",
        demo: "https://drive.google.com/file/d/1Gj6-FugajxQmkDZi2UKCYUfG92QnZXX1/view?usp=sharing",
      },
      {
        id: 20,
        image: img20,
        title: "Weather_app",
        github: "https://github.com/MuhammedMohsn/Weather-app",
        demo: "https://drive.google.com/file/d/1LAr1gN9Fi-seUNZ70sm7qN6kRs66GsCU/view?usp=sharing",
      },
      {
        id: 21,
        image: img21,
        title: "Pargraphs_generator",
        github: "https://github.com/MuhammedMohsn/Pagraphs-generator",
        demo: "https://muhammedmohsn.github.io/Pagraphs-generator/",
      },
      {
        id: 22,
        image: img22,
        title: "Products",
        github: "https://github.com/MuhammedMohsn/Products",
        demo: "https://muhammedmohsn.github.io/Products/",
      },
      {
        id: 23,
        image: img23,
        title: "To-do list ",
        github: "https://github.com/MuhammedMohsn/To-do-list",
        demo: "https://muhammedmohsn.github.io/To-do-list/",
      }
  ];
  return (
    <Fragment>
      <section id="portfolio">
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
