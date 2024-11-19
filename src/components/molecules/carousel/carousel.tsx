"use client";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Slider from "react-slick";

type CarouselProps = {
  images: any;
};

export const Carousel = ({ images }: CarouselProps) => {
  var settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    className: "flex flex-col items-center justify-center z-0",
  };

  return (
    <div className="w-1/2 max-xl:w-[70%] max-lg:w-[75%] max-md:w-[80%] max-sm:w-[90%]">
      <Slider {...settings}>
        {images.map((image: any) => (
          <div
            key={image.Key}
            className="relative flex w-full items-center justify-center border-white bg-transparent"
          >
            <img
              src={`https://s3.timeweb.cloud/64ef3069-ideal/${image.Key}`}
              alt="photo"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
