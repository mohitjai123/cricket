import React, { Children } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = ({settings, children}) => {

  return (
    <div className="lg:w-1/2 w-full mt-10">
      <Slider {...settings}>
         {children}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
