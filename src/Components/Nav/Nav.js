import React, { Fragment, useState } from "react";
import "./Nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiFillBook,
  AiFillMessage,
} from "react-icons/ai";
import { FcServices } from "react-icons/fc";
function Nav() {
  let [active, setActive] = useState("#");

  return (
    <Fragment>
      <nav>
        <a
          href="#"
          onClick={() => {
            setActive("#");
          }}
          className={active === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => {
            setActive("#about");
          }}
          className={active === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          onClick={() => {
            setActive("#experience");
          }}
          className={active === "#experience" ? "active" : ""}
        >
          <AiFillBook />
        </a>
        <a
          href="#services"
          onClick={() => {
            setActive("#services");
          }}
          className={active === "#services" ? "active" : ""}
        >
          <FcServices />
        </a>
        <a
          href="#contact"
          onClick={() => {
            setActive("#contact");
          }}
          className={active === "#contact" ? "active" : ""}
        >
          <AiFillMessage />
        </a>
      </nav>
    </Fragment>
  );
}

export default Nav;
