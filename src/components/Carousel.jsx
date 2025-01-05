/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function MultiCardCarousel({ slides, cardsPerView = 3 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCards = slides.length;
  const maxIndex = totalCards - cardsPerView;

  // Navigate to the previous set of cards
  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  // Navigate to the next set of cards
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel container */}
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-2"
            style={{ width: `${100 / cardsPerView}%` }}
          >
            <img
              src={slide}
              alt={`Slide ${index}`}
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-0 h-full w-full flex justify-between items-center px-4 text-2xl text-gray-700">
        <button
          onClick={previousSlide}
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <BsFillArrowLeftCircleFill />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-2 w-full flex justify-center space-x-2">
        {Array.from({ length: Math.ceil(totalCards / cardsPerView) }).map(
          (_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index * cardsPerView)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentIndex === index * cardsPerView
                  ? "bg-gray-800"
                  : "bg-gray-400"
              }`}
            ></div>
          )
        )}
      </div>
    </div>
  );
}
