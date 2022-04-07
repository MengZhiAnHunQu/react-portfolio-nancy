import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SectionTitle } from "./SectionTitle.js";
import Nancy from "../images/Nancy.JPG";

export const About = () => {
  return (
    <section id="about">
      <SectionTitle title="About Me" />
      <Container>
        <Row>
          <Col className="about-me-img">
            <img
              src={Nancy}
              alt="Nancy"
              className="text-center mb-5"
              width="60%"
            />
          </Col>
          <Col>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              vitae, neque possimus velit nemo dolore mollitia? Officiis, error
              nobis. Repudiandae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              vitae, neque possimus velit nemo dolore mollitia? Officiis, error
              nobis. Repudiandae.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
