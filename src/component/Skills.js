import React from "react";
import { SectionTitle } from "./SectionTitle";

import { Col, Container, Row } from "react-bootstrap";

import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import react from "../images/react.png";
import python from "../images/python.png";

import nodejs from "../images/nodejs.png";
import github from "../images/github.png";
import sql from "../images/sql.png";

export const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <Container>
        <Row>
          <Col>
            <SectionTitle title="Skills" />
          </Col>
        </Row>

        <Row>
          <div
            className="skill-list d-flex justify-content-between fw-bold
            flex-wrap"
            style={{ textAlign: "center", fontFamily: "Roboto" }}
          >
            <span>
              <img
                src={html}
                alt=""
                width="60px"
                className="d-block m-auto mb-2"
              />
              HTML
            </span>

            <span>
              <img
                src={css}
                alt=""
                width="60px"
                className="d-block m-auto mb-2 "
              />
              CSS
            </span>

            <span>
              <img
                src={js}
                alt=""
                width="60px"
                className="d-block m-auto mb-2"
              />
              JS
            </span>

            <span>
              <img
                src={react}
                alt=""
                width="60px"
                className="d-block m-auto mb-2 "
              />
              REACT
            </span>
          </div>
        </Row>

        <Row>
          <div
            className="skill-list d-flex justify-content-between fw-bold
            flex-wrap mt-5 mb-5"
            style={{ textAlign: "center", fontFamily: "Roboto" }}
          >
            <span>
              <img
                src={python}
                alt=""
                width="60px"
                className="d-block m-auto mb-2"
              />
              PYTHON
            </span>
            <span>
              <img
                src={nodejs}
                alt=""
                width="60px"
                className="d-block m-auto mb-2"
              />
              Node
            </span>
            <span>
              <img
                src={sql}
                alt=""
                width="60px"
                className="d-block m-auto mb-2"
              />
              SQL
            </span>
            <span>
              <img
                src={github}
                alt=""
                width="60px"
                className="d-block m-auto mb-2"
              />
              github
            </span>
          </div>
        </Row>
      </Container>
    </div>
  );
};
