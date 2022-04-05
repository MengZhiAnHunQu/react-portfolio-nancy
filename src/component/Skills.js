import React from "react";
import ColoredLine from "./ColoredLine";

import { Col, Container, Row } from "react-bootstrap";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import react from "../images/react.png";
import python from "../images/python.png";

export const Skills = () => {
  return (
    <div>
      <h2 className="text-center m-5 fw-bolder text-light">Skills</h2>
      <ColoredLine />
      <Container>
        <Row>
          <Col>
            <div
              className="skill-list mt-5 mb-5 d-flex justify-content-between fw-bold text-light"
              style={{ textAlign: "center" }}
            >
              <span>
                <img
                  src={html}
                  alt=""
                  width="60px"
                  className="d-block m-auto"
                />
                HTML
              </span>

              <span>
                <img
                  src={css}
                  alt=""
                  width="60px"
                  className="d-block m-auto "
                />
                CSS
              </span>

              <span>
                <img src={js} alt="" width="60px" className="d-block m-auto" />
                JS
              </span>

              <span>
                <img
                  src={react}
                  alt=""
                  width="60px"
                  className="d-block m-auto "
                />
                REACT
              </span>
              <span>
                <img
                  src={python}
                  alt=""
                  width="60px"
                  className="d-block m-auto"
                />
                PYTHON
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
