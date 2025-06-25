import React, { Fragment } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Header_socials() {
  return (
    <Fragment>
      <div className="header_socials">
        <a
          href="https://www.linkedin.com/in/muhammed-mohsen1111/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/MuhammedMohsn" target="_blank">
          <BsGithub />
        </a>
      </div>
    </Fragment>
  );
}

export default Header_socials;
