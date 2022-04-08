import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { SectionTitle } from "./SectionTitle.js";
import Nancy from "../images/Nancy.JPG";

export const About = () => {
  return (
    <section id="about">
      <SectionTitle title="About Me" />
      <Container>
        <Row className="p-5">
          <Col className="about-me-img">
            <Image
              src={Nancy}
              alt="Nancy"
              className="text-center mb-5 nancy "
              width="80%"
            />
          </Col>
          <Col>
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
