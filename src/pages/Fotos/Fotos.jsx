import Carousel from 'react-bootstrap/Carousel';
import imagenUno from '../../assets/menu/burger-11.jpg';
import imagenDos from '../../assets/menu/burger-17.jpg';
import imagenTres from '../../assets/menu/ads-1.jpg';
import './Fotos.css';



const Home = () => {

    return (
        <>
                
            
                
            <Carousel data-bs-theme="dark">
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