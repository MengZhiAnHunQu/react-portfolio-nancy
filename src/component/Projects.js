import React from "react";
import { Col, Container, Row, Button, Image } from "react-bootstrap";
import { SectionTitle } from "./SectionTitle";
import movie from "../images/movie.png";
import robot from "../images/robot.png";
import list from "../images/list.png";

export const Projects = () => {
  return (
    <section id="projects" className="project-section pt-5 pb-5 ">
      <Container>
        <Row>
          <Col>
            <SectionTitle title="Projects" />
          </Col>
        </Row>
        {/* project 1 movie */} {/* project 1 movie */} {/* project 1 movie */}{" "}
        {/* project 1 movie */} {/* project 1 movie */}
        <Row className="py-5">
          <Col md="6">
            <Image
              src={movie}
              alt="project "
              className="img-thumbnail d-block m-auto img-fluid "
            />
          </Col>

          <Col md="6">
            <h2
              className="proj-title fw-bolder mt-3"
              style={{ fontFamily: "Merriweather" }}
            >
              Movie Website
            </h2>

            <p className="fw-bold mt-3">
              Tech: HTML, CSS, JavaScript, REACT, API
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              fuga et facilis sunt similique deserunt. Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>

            <Button variant="outline-light " className="mr-1">
              View Project
            </Button>

            <Button
              variant="outline-light "
              className="m-1"
              href="https://github.com/MengZhiAnHunQu/react-movie-list"
              target="_blank"
            >
              <span className="fab fa-github text-light"></span> Visit Github
            </Button>
          </Col>
        </Row>
        <hr />
        {/* project 2 Not to do List*/}
        <Row className="py-5">
          <Col md="6" className="order-md-2">
            <img
              src={list}
              alt="project "
              className="img-thumbnail img-fluid "
            />
          </Col>

          <Col md="6">
            <h2
              className="proj-title fw-bolder mt-3"
              style={{ fontFamily: "Merriweather" }}
            >
              Not To Do List
            </h2>

            <p className="fw-bold mt-3">
              Tech: HTML, CSS, JavaScript, REACT, API
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              fuga et facilis sunt similique deserunt. Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>

            <Button variant="outline-light " className="mr-1 btn">
              View Project
            </Button>

            <Button
              variant="outline-light "
              className="m-1 btn"
              href="https://github.com/MengZhiAnHunQu/react-not-to-do-list"
            >
              <span className="fab fa-github text-light"></span> Visit Github
            </Button>
          </Col>
        </Row>
        <hr />
        {/* project 3 */}
        <Row className="py-5">
          <Col md="6">
            <img
              src={robot}
              alt="project "
              className="img-thumbnail d-block m-auto img-fluid"
            />
          </Col>

          <Col md="6">
            <h2
              className="proj-title fw-bolder mt-3 "
              style={{ fontFamily: "Merriweather" }}
            >
              Robot Collection
            </h2>

            <p className="fw-bold mt-3">
              Tech: HTML, CSS, JavaScript, REACT, API
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              fuga et facilis sunt similique deserunt. Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>

            <Button
              variant="outline-light "
              className="mr-1"
              href="https://react-robot.netlify.app/"
              target="_blank"
            >
              View Project
            </Button>

            <Button
              variant="outline-light "
              className="m-1"
              href="http://github.com/MengZhiAnHunQu/react-robot "
              target="_blank"
            >
              <span className="fab fa-github text-light"></span> Visit Github
            </Button>
          </Col>
        </Row>
        <Button variant="outline-light btn-lg " className="d-block m-auto mt-5">
          View More Projects
        </Button>
      </Container>
    </section>
  );
};
