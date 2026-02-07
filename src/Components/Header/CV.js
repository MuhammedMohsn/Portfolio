import React, { Fragment } from "react";
import myCV from "../../assets/Front-end-Developer–MuhammedMohsen_CV.pdf";
function CV() {
  return (
    <Fragment>
      <div className="CV">
        <a href={myCV} download className="btn">
          Download CV
        </a>
        <a href="#contact" className="btn btn_primary">
          hello we can talk{" "}
        </a>
      </div>
    </Fragment>
  );
}

export default CV;
