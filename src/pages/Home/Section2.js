import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Pizza from "../../assets/about/2316868.png";
import Salad from "../../assets/about/619.png";
import Delivery from "../../assets/about/7261534.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Estacionamiento",
    paragraph: `Contamos con estacionamiento gratuito dentro del predio para brindarte seguridad y comodidad.`,
  },
  {
    image: Salad,
    title: "excelente ubicación",
    paragraph: `Ubicados en el corazón de Florencio Varela, frente a la estación, donde se encuentran todas las lineas de colectivos.`,
  },
  {
    image: Delivery,
    title: "Atendido por sus dueños",
    paragraph: `Estamos a disposición y gustosos de recibir nuevos clientes y amigos. `,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5 mb-lg-0">
              <h2>Cesped sintético de primera! </h2>
              <p>
              Dos canchas de cesped sintético totalmente renovadas para que la pases bien y demuestres toda tu magia.
              </p>
             
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
