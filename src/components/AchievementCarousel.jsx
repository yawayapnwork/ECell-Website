import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const AchievementCarousel = ({images}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full max-w-4xl overflow-hidden rounded-xl">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={src}
                alt=""
                className="rounded-xl w-full h-56 sm:h-72 md:h-80 lg:h-[24rem] xl:h-[26rem] object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AchievementCarousel;