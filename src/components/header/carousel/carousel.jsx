//external components
import { Carousel } from 'react-responsive-carousel';  //https://www.npmjs.com/package/react-responsive-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//assets
import banner1 from "../../../assets/images/Banner1.png"
import banner2 from "../../../assets/images/Banner2.png"
import "./carousel.css"

const DemoCarousel = () => {
    return (
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={5000} showArrows={false} showStatus={false}>
            <div className="carousel-img">
                <img src={banner1} />
            </div>
            <div className="carousel-img">
                <img src={banner2} />
            </div>
        </Carousel>
    );
  }
  
  export default DemoCarousel;