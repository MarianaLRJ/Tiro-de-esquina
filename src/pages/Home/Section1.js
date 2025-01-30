import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">Tiro de Esquina</h1>
              <h2 className="text-white">Canchas de 5 y 6</h2>
              <Link to="/" className="btn order_now">
                ME GUSTA!
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;
