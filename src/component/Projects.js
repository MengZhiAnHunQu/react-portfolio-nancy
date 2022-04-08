import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { SectionTitle } from "./SectionTitle";
import movie from "../images/movie.png";
import robot from "../images/robot.png";
import weatherApp from "../images/weatherApp.png";
import list from "../images/list.png";
import "./projects.css";

export const Projects = () => {
  return (
    <section id="projects" className="project-section  pb-5 ">
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
            <img src={movie} alt="project " className="pj-img " width="80%" />
          </Col>

          <Col md="6" className="ps-5">
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

            <Button
              variant="outline-light "
              className="mr-1 btn "
              href="https://624eaa3a69f8a2000948992b--react-movielist-nancy.netlify.app/"
              target="_blank"
            >
              View Project
            </Button>

            <Button
              target="_blank"
              variant="outline-light "
              className="m-1 btn"
              href="https://github.com/MengZhiAnHunQu/react-movie-list"
            >
              <span className="fab fa-github text-light"></span> Visit Github
            </Button>
          </Col>
        </Row>
        <hr />
        {/* project 2 Not to do List*/}
        <Row className="py-5">
          <Col md="6" className="order-md-2">
            <img src={list} alt="project " className=" pj-img" width="80%" />
          </Col>

          <Col md="6" className="pe-2">
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

            <Button
              target="_blank"
              variant="outline-light "
              className="mr-1 btn"
              href="https://not-to-do-list.netlify.app/"
            >
              View Project
            </Button>

            <Button
              target="_blank"
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
              src={weatherApp}
              alt="project "
              className=" pj-img"
              width="80%"
            />
          </Col>

          <Col md="6" className="ps-5">
            <h2
              className="proj-title fw-bolder mt-3 "
              style={{ fontFamily: "Merriweather" }}
            >
              Weather App
            </h2>

            <p className="fw-bold mt-3">Tech: HTML, CSS, JavaScript, API</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              fuga et facilis sunt similique deserunt. Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>

            <Button
              target="_blank"
              variant="outline-light "
              className="mr-1"
              href="https://super-weather-app.netlify.app"
            >
              View Project
            </Button>

            <Button
              target="_blank"
              variant="outline-light "
              className="m-1"
              href="https://github.com/MengZhiAnHunQu/super-weather-app "
            >
              <span className="fab fa-github text-light"></span> Visit Github
            </Button>
          </Col>
        </Row>
        <hr />
        {/* Project 4 */}
        <Row className="py-5">
          <Col md="6" className="order-md-2">
            <img
              src={robot}
              alt="project "
              className=" pj-img d-block m-auto "
              width="80%"
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
              target="_blank"
              variant="outline-light "
              className="mr-1"
              href="https://react-robot.netlify.app/"
            >
              View Project
            </Button>

            <Button
              target="_blank"
              variant="outline-light "
              className="m-1"
              href="http://github.com/MengZhiAnHunQu/react-robot "
            >
              <span className="fab fa-github text-light"></span> Visit Github
            </Button>
          </Col>
        </Row>
        <Button
          variant="outline-light btn-lg "
          className=" mt-5 d-block m-auto "
        >
          View More Projects
        </Button>
      </Container>
    </section>
  );
};
