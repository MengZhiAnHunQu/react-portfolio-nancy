import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { SectionTitle } from "./SectionTitle";
import proj from "../images/proj.jpg";
import github from "../images/github.png";

export const Projects = () => {
  return (
    <section id="projects" className="project-section pt-5 pb-5 ">
      <Container>
        <Row>
          <Col>
            <SectionTitle title="Projects" />
          </Col>
        </Row>
        {/* project 1 */}
        <Row className="py-5">
          <Col md="6">
            <img
              src={proj}
              alt="project "
              className="img-thumbnail"
              width="60%"
            />
          </Col>

          <Col md="6">
            <h2
              className="proj-title fw-bolder mt-3"
              style={{ fontFamily: "Merriweather" }}
            >
              Movie Website
            </h2>

            <p className="fw-bold mt-5">
              Tech: HTML, CSS, JavaScript, REACT, API
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              fuga et facilis sunt similique deserunt. Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>

            <Button variant="outline-primary " className="m-1">
              View Project
            </Button>

            <Button variant="outline-primary " className="m-1">
              <img src={github} alt="" width="20px" /> Visit Github
            </Button>
          </Col>
        </Row>

        {/* project 2 */}
        <Row className="py-5">
          <Col md="6" className="order-md-2">
            <img
              src={proj}
              alt="project "
              className="img-thumbnail "
              width="60%"
            />
          </Col>

          <Col md="6">
            <h2
              className="proj-title fw-bolder mt-3"
              style={{ fontFamily: "Merriweather" }}
            >
              Movie Website
            </h2>

            <p className="fw-bold mt-5">
              Tech: HTML, CSS, JavaScript, REACT, API
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              fuga et facilis sunt similique deserunt. Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>

            <Button variant="outline-primary " className="m-1">
              View Project
            </Button>

            <Button variant="outline-primary " className="m-1">
              <img src={github} alt="" width="20px" /> Visit Github
            </Button>
          </Col>
        </Row>
        {/* project 3 */}
        <Row className="py-5">
          <Col md="6">
            <img
              src={proj}
              alt="project "
              className="img-thumbnail"
              width="60%"
            />
          </Col>

          <Col md="6">
            <h2
              className="proj-title fw-bolder mt-3"
              style={{ fontFamily: "Merriweather" }}
            >
              Movie Website
            </h2>

            <p className="fw-bold mt-5">
              Tech: HTML, CSS, JavaScript, REACT, API
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              fuga et facilis sunt similique deserunt. Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>

            <Button variant="outline-primary " className="m-1">
              View Project
            </Button>

            <Button variant="outline-primary " className="m-1">
              <img src={github} alt="" width="20px" /> Visit Github
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
