import React from 'react';
import './contacto.css';
import ContactImage from '../../assets/logo/img_2_1737685043745.jpg';

export default function Contact() {
  return (
    <>
        <section id="contact">
            <div className="container">
                <div className="contact_wrapper">
                    <div className="contact_col">
                        <div className="contact_image">
                            <img src={ContactImage} alt="Contact"/>
                        </div>
                    </div>
                    <div className="contact_col">
                        <h2>Contactanos</h2>
                        <form>
                            <div className="input_wrapper">
                                <input type="text" className="form-control" placeholder="Tu nombre..." autocomplete="off"/>
                            </div>
                            <div className="input_wrapper">
                                <input type="text" className="form-control" placeholder="Tu teléfono..." autocomplete="off"/>
                            </div>
                            <div className="input_wrapper">
                                <input type="email" className="form-control" placeholder="Tu Email..." autocomplete="off"/>
                            </div>
                            <div className="input_wrapper">
                                <textarea placeholder="tu mensaje..."></textarea>
                            </div>
                            <div className="btn_wrapper">
                                <button type="submit" className="btn">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
