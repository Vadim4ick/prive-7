// import Slider, { Settings } from "react-slick";

// import { memo } from "react";
// import { SliderFragmentFragment } from "@/graphql/__generated__";

// import { pathImage } from "@/lib/utils";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const settings: Settings = {
//   dots: true,
//   infinite: false,
//   speed: 500,
//   slidesToShow: 1,
//   arrows: false,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   fade: true, // Добавлено
// };

// const SliderBanner = memo(
//   ({ slider }: { slider: readonly SliderFragmentFragment[] }) => {
//     return (
//       <Slider {...settings} className="overflow-hidden">
//         {slider.map((slide) => {
//           return (
//             <img
//               key={slide.id}
//               className="max-h-[508px] w-full"
//               src={`${pathImage(slide.directus_files_id.id)}`}
//             />
//           );
//         })}
//       </Slider>
//     );
//   },
// );

// export { SliderBanner };

import Slider, { Settings } from "react-slick";
import { memo, useRef } from "react";
import { SliderFragmentFragment } from "@/graphql/__generated__";
import { pathImage } from "@/lib/utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings: Settings = {
  dots: true,
  infinite: false, // Отключаем бесконечный цикл
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
};

const SliderBanner = memo(
  ({ slider }: { slider: readonly SliderFragmentFragment[] }) => {
    const sliderRef = useRef<Slider | null>(null);

    const handleAfterChange = (current: number) => {
      if (current === slider.length - 1) {
        setTimeout(() => {
          if (sliderRef.current) {
            sliderRef.current.slickGoTo(0); // Переход на первый слайд
          }
        }, settings.autoplaySpeed);
      }
    };

    return (
      <Slider
        {...settings}
        ref={sliderRef}
        afterChange={handleAfterChange}
        className="overflow-hidden"
      >
        {slider.map((slide) => (
          <img
            key={slide.id}
            className="max-h-[508px] w-full"
            src={`${pathImage(slide.directus_files_id.id)}`}
          />
        ))}
      </Slider>
    );
  },
);

export { SliderBanner };
