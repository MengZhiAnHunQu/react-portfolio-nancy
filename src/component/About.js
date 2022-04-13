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
          <Col className="about-me-img" md="6">
            <Image
              src={Nancy}
              alt="Nancy"
              className="text-center mb-5 nancy "
              width="80%"
            />
          </Col>
          <Col md="6">
            <div className="mt-5 ">
              With 5 years of experience in the education industry and my
              participation in the development of an online learning website, I
              naturally got attracted to the process of web development, AI,
              algorithms, and Natural language process. Exploring this interest,
              I started studying front-end development before challenging myself
              to complete multiple intensive Front End Boot Camps.
            </div>
            <br />
            <div>
              I’ve found this process to be extremely rewarding and applying my
              strong attention to detail and results-driven mindset has been
              complimentary to the process. After several months of intense
              learning and creating my own projects, I’ve decided to make the
              leap from education into IT, specifically web development, I am
              thrilled to take this next step!
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
