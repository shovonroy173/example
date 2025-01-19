/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function MultiCarousel({ slides }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full">
  <Carousel responsive={responsive}>
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide} alt="" />
        </div>
      ))}
    </Carousel>
    </div>
  
  );
}

export default MultiCarousel;
