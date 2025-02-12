import Carousel from 'react-bootstrap/Carousel';
import imagenUno from '../../assets/menu/burger-11.jpg';
import imagenDos from '../../assets/menu/burger-17.jpg';
import imagenTres from '../../assets/menu/ads-1.jpg';
import './Fotos.css';



const Home = () => {

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
           
                      
               </section>
                
            <Carousel style={{width:"80vw" , margin: "auto"}} data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagenUno}
                        alt="First slide"
                    />
                  
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagenDos}
                        alt="Second slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagenTres}
                        alt="Third slide"
                    />
                  
                </Carousel.Item>
            </Carousel>
        </>
            );
}

export default Home;