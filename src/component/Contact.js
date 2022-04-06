import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SectionTitle } from "./SectionTitle.js";

export const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <SectionTitle title="Contact Me" />

        <Row>
          <Col className="d-flex justify-content-around fs-1">
            <a target="_blank" href="mailto:youre@mail">
              <span class="fa-brands fa-github"></span>
            </a>

            <a target="_blank" href="#link to ...">
              <span class="fab fa-linkedin"></span>
            </a>

            <a target="_blank" href="#link to ...">
              <span class="fab fa-twitter-square"></span>
            </a>

            <a target="_blank" href="#link to ...">
              <span class="fab fa-facebook-square"></span>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
