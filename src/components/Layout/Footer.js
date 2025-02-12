import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import chat from '../../assets/logo/WhatsApp.svg.png'

function Footer() {
  // Scroll State
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Ubicación</h5>
                <p>Lavalle 281 E/Fonrrouge y Belgrano</p>
                <p>Florencio Varela</p>
                <p>Buenos Aires</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Horarios</h5>
                <p>Lunes a domingos </p>
                <p>10:00AM - 11:00PM</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
              <h5>Teléfono</h5>
              <h4>11-40891744</h4>
          <div className="chat">
          <p>Llamanos o envianos un whatsapp</p>
          <i class="bi bi-arrow-down"></i>
                <p>
                <a aria-label="Chat on WhatsApp" href="chat">
                  </a>  
                
                 <Link to="https://wa.me/1140891744" className="logo">
                              <img src={chat} alt="chat" className="guat" />
                            </Link>
                </p>
              </div>
                </div> 
                
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Seguinos</h5>
                <p>Seguinos, compartí y dale like a nuestras redes sociales</p>
                <ul className="list-unstyled text-center mt-2">
                  <li>
                    <Link to="https://www.facebook.com/profile.php?id=100063955028868">
                      <i className="bi bi-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com/tirodeesquinafutbol/">
                      <i className="bi bi-instagram"></i>
                    </Link>
                  </li>
                  <li>
    
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="copy_right">
            <Col>
              <div>
                <ul className="list-unstyled text-center mb-0">
                  <li>
                    <Link to="/">
                      © 2025 Diseñado por <span>LRJ </span>. -All Rights Reserved-
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Sroll To Top */}
      {isVisible && (
        <div className="scroll_top" onClick={scrollTop}>
          <i className="bi bi-arrow-up"></i>
        </div>
      )}
    </>
  );
}

export default Footer;
