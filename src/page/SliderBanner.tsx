import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { memo } from "react";

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
};

const SliderBanner = memo(() => {
  return (
    <Slider {...settings}>
      <div className="mr-4">
        <img src="/slider/1.png" />
      </div>
      <div>
        <img src="/slider/1.png" />
      </div>
      <div>
        <img src="/slider/1.png" />
      </div>
      <div>
        <img src="/slider/1.png" />
      </div>
    </Slider>
  );
});

export { SliderBanner };
