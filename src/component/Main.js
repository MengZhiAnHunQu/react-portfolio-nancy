import React from "react";
import { Button, Image } from "react-bootstrap";
import Nancy from "../images/Nancy.JPG";

export const Main = () => {
  return (
    <div className="container main">
      <div className="Row d-flex mt-2 pt-5">
        <div className="col-7 text-center">
          <div>
            Hi, I am
            <br />
            Nancy Wang
          </div>

          <h5 className="mt-3">Frontend developer, based in Australia🇦🇺</h5>
          <Button variant="outline-danger">Download Resume</Button>
        </div>

        <div className="col-5 d-flex">
          <Image
            src={Nancy}
            width="80%"
            height="auto"
            alt=" Nancy photo"
            className="nancy-img"
          />
        </div>
      </div>
    </div>
  );
};
