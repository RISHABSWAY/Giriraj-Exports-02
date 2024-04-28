import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BP1 from '../assets/BP1.png';
import WC1 from '../assets/WC1.png';
import AntiqueCollections from "./AntiqueCollections";
import { Link } from "react-router-dom";

const CopperProduct = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsPopupVisible(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (contentRef.current) {
        const { top } = contentRef.current.getBoundingClientRect();
        setIsContentVisible(top < window.innerHeight);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 2000 }, items: 4.5 },
    desktop: { breakpoint: { max: 2000, min: 1024 }, items: 3.5 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2.5 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1.5 },
  };

  const renderCarouselItem = (image, link, text) => (
    <div className={`carousel-item ${isPopupVisible ? "animate-slide-up" : ""}`}>
      <div className="border rounded shadow flex-grow-1 flex-shrink-0 h-[300px] sm:w-[200px] md:w-[270px] lg:w-[300px] xl:w-[350px] bg-cover bg-center" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', width: `inherit`, opacity: `85%` }}>
        <Link to={link} className="absolute inset-0 flex items-center justify-center text-black text-xl font-bold bg-transparent bg-opacity-50 hover:bg-opacity-70 hover:bg-black transition duration-300">
          {text}
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <div>
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-black font-header text-[28px]">
            Bottle Collection
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="flex flex-col gap-2">
          <Carousel responsive={responsive} className="p-4" swipeable={true} draggable={true} autoPlay={true} autoPlaySpeed={2000} infinite={true}>
            {renderCarouselItem(BP1, "/All-Bottle-Collection", "Browse All Collection")}
            {renderCarouselItem(BP1, '/antique-bottle-collection', "Antique Collection")}
            {renderCarouselItem(BP1, '/colored-bottle-collection', "Colored Collection")}
            {renderCarouselItem(BP1, '/printed-bottle-collection', "Printed Collection")}
            {renderCarouselItem(BP1, '/pure-copper-collection', "Pure Copper Collection")}
          </Carousel>
        </div>
      </div>

      <div ref={contentRef} className={`transition-opacity duration-1000 ${isContentVisible ? "slide-up" : ""}`}>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-black font-header text-[28px]">
            Water Container Collection
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="flex flex-col gap-2">
          <Carousel responsive={responsive} className="mt-2 p-4" swipeable={true} draggable={true} autoPlay={true} autoPlaySpeed={2000} infinite={true}>
            {renderCarouselItem(WC1, "/All-Water-Collection", "Browse All Collection")}
            {renderCarouselItem(WC1, '/antique-water-collection', "Antique Collection")}
            {renderCarouselItem(WC1, '/colored-water-collection', "Colored Collection")}
            {renderCarouselItem(WC1, '/printed-water-collection', "Printed Collection")}
            {renderCarouselItem(WC1, '/pure-copper-water-collection', "Pure Copper Collection")}
          </Carousel>
        </div>
      </div>

      <div ref={contentRef} className={`transition-opacity duration-1000 ${isContentVisible ? "slide-up" : ""}`}>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-black font-header text-[28px]">
            Bedroom Pot Collection
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="flex flex-col gap-2">
          <Carousel responsive={responsive} className="mt-2 p-4" swipeable={true} draggable={true} autoPlay={true} autoPlaySpeed={2000} infinite={true}>
            {renderCarouselItem(BP1, "/browse-all-collection", "Browse All Collection")}
            {renderCarouselItem(BP1, '/antique-bedroom-collection', "Antique Collection")}
            {renderCarouselItem(BP1, '/colored-bedroom-collection', "Colored Collection")}
            {renderCarouselItem(BP1, '/printed-bedroom-collection', "Printed Collection")}
            {renderCarouselItem(BP1, '/pure-bedroom-collection', "Pure Copper Collection")}
          </Carousel>
        </div>
      </div>

      <div ref={contentRef} className={`transition-opacity duration-1000 ${isContentVisible ? "slide-up" : ""}`}>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-black font-header text-[28px]">
            Water Jug Collection
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="flex flex-col gap-2">
          <Carousel responsive={responsive} className="mt-2 p-4" swipeable={true} draggable={true} autoPlay={true} autoPlaySpeed={2000} infinite={true}>
            {renderCarouselItem(BP1, "/browse-all-collection", "Browse All Collection")}
            {renderCarouselItem(BP1, '/copper-steel-collection', "Copper Steel Collection")}
            {renderCarouselItem(BP1, '/pure-jug-collection', "Pure Copper Collection")}
            {renderCarouselItem(BP1, '/hammered-jug-collection', "Hammered Jug Collection")}
          </Carousel>
        </div>
      </div>

      <div ref={contentRef} className={`transition-opacity duration-1000 ${isContentVisible ? "slide-up" : ""}`}>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-black font-header text-[28px]">
            Glass Collection
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="flex flex-col gap-2">
          <Carousel responsive={responsive} className="mt-2 p-4" swipeable={true} draggable={true} autoPlay={true} autoPlaySpeed={2000} infinite={true}>
            {renderCarouselItem(BP1, "/browse-all-collection", "Browse All Collection")}
            {renderCarouselItem(BP1, '/copper-steel-collection', "Copper Steel Collection")}
            {renderCarouselItem(BP1, '/pure-copper-glass-collection', "Pure Copper Collection")}
            {renderCarouselItem(BP1, '/anitque-glass-collection', "Antique Glass Collection")}
            {renderCarouselItem(BP1, '/printed-glass-collection', "Printed glass Collection")}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default CopperProduct;
