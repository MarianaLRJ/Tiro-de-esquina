import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/hero/IMG-20240612-WA0038.jpg";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Vení a jugar al fútbol y a pasarla bien!!!</h2>
              <p>
                En Tiro de esquina, además de ofrecerte un espacio para hacer rodar la bocha, también podes festejar cumpleaños, despedidas o el evento que quieras. Por lo cual, te ofrecemos:
              </p>
              <ul>
                <li>
                  <p>
                   Parrilla, baños y vestuarios.
                  </p>
                </li>
                <li>
                  <p>Un salón equipado con mesas, silla, música y tv Led.</p>
                </li>
                <li>
                  <p>
                    Espacio para desplegar inflables y gazebos.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
