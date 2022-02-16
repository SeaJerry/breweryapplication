import { CarouselImageData } from "./CarouselImageData";
import './Carousel.css'
import { useState } from "react";
import { MdOutlineArrowLeft, MdOutlineArrowRight} from "react-icons/md";

const Carousel = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }



  return (
    <section className="slider">
        <MdOutlineArrowLeft className="left-arrow"  />
        <MdOutlineArrowRight className="right-arrow"  />
      {CarouselImageData.map((slide, index) => {
          return<img className= "images" src={slide.image} alt='breweries' />;
      })};
    </section>
  )
};

export default Carousel
