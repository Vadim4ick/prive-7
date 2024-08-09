import { Link } from "react-router-dom";
import { ServiceItem } from "../page/HomePage";

const CartService = ({ item }: { item: ServiceItem }) => {
  return (
    <Link
      to={`/service/${item.id}`}
      className="h-[652px] bg-white rounded-[20px] relative overflow-hidden"
    >
      <div className="p-8">
        <div className="flex flex-col gap-7">
          <h3 className="font-semibold text-[36px] leading-[40px]">
            {item.title}
          </h3>

          <div className="flex flex-wrap gap-2">
            {item.service.map((service) => {
              return (
                <div
                  key={service}
                  className="py-[10px] px-4 bg-[#EFF0F2] rounded-full text-[#878787] font-medium text-[22px] leading-[27px]"
                >
                  {service}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <img
        className="absolute bottom-0 right-0"
        src={`/service/${item.img}.png`}
        srcSet={`/service/${item.img}.png 1x, /service/${item.img}@2x.png 2x`}
      />
    </Link>
  );
};

export { CartService };
