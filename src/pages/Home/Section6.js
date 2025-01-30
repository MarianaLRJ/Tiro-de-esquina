import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";


function Section6() {
  return (
    <section className="blog_section">
      <Container>
        <h2 className="text-center text-white">
          ***Nuestros clientes nos califican***
        </h2>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                
                <p>
                  " Excelente lugar para pasar un buen rato jugando al fútbol y compartiendo con amigos.  "
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                
                <p>
                  " Buena atención de los dueños, el lugar está cerca de todas las paradas de colectivos, de fácil acceso y lo mejor es que cuenta con estacionamiento dentro del lugar."
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                
                <p>
                  " El cesped esta en perfectas condiciones y las luces Led le dan muy buena visibilidad al campo de juego "
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default Section6;
