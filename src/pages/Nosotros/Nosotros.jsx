import React from 'react';
import './Nosotros.css';
import AboutImage from '../../assets//hero/Mantenimiento-de-Canchas-de-Pasto-Sintetico.jpg';

export default function About() {
   

  return (
    <>
    <section id="about">
        <div className="container">
            <div className="about_box_wrapper">
                <div className="about_box">
                    <div className="about_content">
                        <h5>Development</h5>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan sit accusa.</p>
                    </div>
                </div>
                
    
                </div>
            </div>

            <div className="about_box_details">
                <div className="about_col">
                    <div className="about_image">
                        <img src={AboutImage} alt="about" className="about_main"/>
                    </div>
                   
                </div>
             
            </div>
    </section>
    </>
  )
}


