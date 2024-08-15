import { Link } from "react-router-dom";
import { GetServicesQuery } from "@/graphql/__generated__";
import { memo } from "react";
import { pathImage } from "@/lib/utils";

const CartService = memo(
  ({ item }: { item: GetServicesQuery["services"][0] }) => {
    return (
      <Link
        to={`/service/${item.id}`}
        className="relative h-[652px] overflow-hidden rounded-[20px] bg-white"
      >
        <div className="p-8">
          <div className="flex flex-col gap-7">
            <h3 className="text-[36px] font-semibold leading-[40px]">
              {item.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag: string, idx: number) => {
                return (
                  <div
                    key={idx}
                    className="rounded-full bg-[#EFF0F2] px-4 py-[10px] text-[22px] font-medium leading-[27px] text-[#878787]"
                  >
                    {tag}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {item.img && (
          <img
            className="absolute bottom-0 right-0"
            src={pathImage(item.img.id)}
          />
        )}
      </Link>
    );
  },
);

export { CartService };
