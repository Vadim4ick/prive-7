import { Link } from "react-router-dom";
import { GetServicesQuery } from "@/graphql/__generated__";
import { memo } from "react";
import { pathImage } from "@/lib/utils";

const CartService = memo(
  ({ item }: { item: GetServicesQuery["services"][0] }) => {
    return (
      <Link
        to={`/service/${item.id}`}
        className="relative h-[373px] overflow-hidden rounded-[20px] bg-white"
      >
        <div className="p-[18px]">
          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[20px] font-semibold leading-[22px]">
              {item.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {item.tags &&
                item.tags.map((tag: string, idx: number) => {
                  return (
                    <div
                      key={idx}
                      className="rounded-full bg-[#EFF0F2] px-[9px] py-[6px] text-[12px] font-medium leading-[16px] text-[#878787]"
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
            className="absolute bottom-0 right-0 max-h-[250px] object-cover"
            src={pathImage(item.img.id)}
          />
        )}
      </Link>
    );
  },
);

export { CartService };
