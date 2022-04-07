import React from "react";
import { Image, Row, Container } from "react-bootstrap";
import Nancy from "../images/Nancy.JPG";
import pexels from "../images/pexels.mp4";
import "./hero.css";

export const Hero = () => {
  return (
    <Container>
      <div className="hero mt-5" id="hero">
        <video autoPlay loop muted id="myVideo">
          <source src={pexels} type="video/mp4" />
        </video>

        <Row className="d-flex  text-light">
          <div className="col-md-7 col-xs-12 text-center p-3">
            <div>
              Hi, I am
              <br />
              Nancy Wang
            </div>

            <h3 className="mt-5 mb-3">
              Frontend developer, based in Australia 🇦🇺
            </h3>
          </div>

          <div className="col-md-5 col-xs-12  d-flex ">
            <Image
              src={Nancy}
              width="40%"
              height="auto"
              alt=" Nancy photo"
              className="nancy-img mt-2 mb-5 "
            />
          </div>
        </Row>
      </div>
    </Container>
  );
};
