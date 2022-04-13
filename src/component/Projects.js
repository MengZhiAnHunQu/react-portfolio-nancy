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
            <img
              src={weatherApp}
              alt="project "
              className=" pj-img"
              width="80%"
            />
          </Col>

          <Col md="6" className="ps-5">
            <h2 className="proj-title fw-bolder mt-3 ">Weather App</h2>

            <p className="fw-bold mt-3">Tech: HTML, CSS, JavaScript, API</p>
            <div>
              <h6>App Description: an easy to use weather app. </h6>
              <br />
              <div>
                <h6>Features:</h6>
                <p>-Real data from open weather api</p>
                <p>-Current location available</p>
                <p>responsive to all devices</p>
              </div>
            </div>

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
        {/* project 2 Not to do List*/}
        <Row className="py-5">
          <Col md="6" className="order-md-2">
            <img
              src={robot}
              alt="project "
              className=" pj-img d-block m-auto "
              width="80%"
            />
          </Col>

          <Col md="6" className="ps-5">
            <h2 className="proj-title fw-bolder mt-3 ">Robot Collection</h2>

            <p className="fw-bold mt-3">Tech: HTML, CSS, JavaScript, API</p>
            <div>
              <h6>App Description: search and collect your favorite robot. </h6>
              <br />
              <div>
                <h6>Features:</h6>
                <p>-Real data from robot generator api</p>
                <p>-add your robo to your favorite list</p>
              </div>
            </div>

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
        {/* project 3 */}
        <Row className="py-5">
          <Col md="6">
            <img src={movie} alt="project " className="pj-img " width="80%" />
          </Col>

          <Col md="6" className="ps-5">
            <h2 className="proj-title fw-bolder mt-3">Movie Website</h2>

            <p className="fw-bold mt-3">
              Tech: HTML, CSS, JavaScript, REACT, API
            </p>
            <div>
              <h6>
                Website Description: a movie website to search and sort movies
                based on mood.
              </h6>
              <br />
              <div>
                <h6>Features:</h6>
                <p>
                  -Sort and filter movie to different category based on users
                  mood
                </p>
                <p>-Arrange by grid or list view</p>
                <p>-Omdb real world API</p>
              </div>
            </div>

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
        {/* Project 4 */}
        <Row className="py-5">
          <Col md="6" className="order-md-2">
            <img src={list} alt="project " className=" pj-img" width="90%" />
          </Col>

          <Col md="6" className="pe-2">
            <h2 className="proj-title fw-bolder mt-3">Not To Do List</h2>

            <p className="fw-bold mt-3">
              Tech: HTML, CSS, JavaScript, REACT, API
            </p>
            <div>
              <h6>
                Website Description: A personalized list of tasks and habits you
                should never do.
              </h6>
              <br />
              <div>
                <h6>Features:</h6>
                <p>-Creating to do and not-to-do lists</p>
                <p>-Total hours and bad list hours calculated</p>
                <p>-Tick and delete the tasks</p>
              </div>
            </div>

            <Button
              target="_blank"
              variant="outline-light "
              className="mr-1 btn"
              href="https://not-to-do-list.netlify.app"
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
