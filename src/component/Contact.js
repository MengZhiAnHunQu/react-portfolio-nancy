import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { SectionTitle } from "./SectionTitle.js";

export const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <SectionTitle title="Contact" className="m-5" />

        <div className="text-center">
          <div className="mb-5  text-light fs-4">nancywang.edu@gmail.com</div>

          <Button variant="outline-light " className="btn-hello mb-5">
            Say Hello!
          </Button>
        </div>

        <Row className="pb-5">
          <Col className="d-flex justify-content-around fs-1">
            <a target="_blank" href="#link to ...">
              <i className="fab fa-github text-light"></i>
            </a>

            <a target="_blank" href="#link to ...">
              <span className="fab fa-linkedin text-light"></span>
            </a>

            <a target="_blank" href="#link to ...">
              <span className="fab fa-twitter-square text-light"></span>
            </a>

            <a target="_blank" href="#link to ...">
              <span className="fab fa-facebook-square text-light"></span>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
