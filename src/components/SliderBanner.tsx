import Slider, { Settings } from "react-slick";

import { memo } from "react";
import { SliderFragmentFragment } from "@/graphql/__generated__";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pathImage } from "@/lib/utils";

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3500,
};

const SliderBanner = memo(
  ({ slider }: { slider: readonly SliderFragmentFragment[] }) => {
    return (
      <Slider {...settings} className="flex h-full max-h-[508px] gap-4">
        {slider.map((slide) => {
          return (
            <div key={slide.id}>
              <img src={`${pathImage(slide.directus_files_id.id)}`} />
            </div>
          );
        })}
      </Slider>
    );
  },
);

export { SliderBanner };
