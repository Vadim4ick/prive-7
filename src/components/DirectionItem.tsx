import classNames from "classnames";
import { GetServicesItemQuery } from "@/graphql/__generated__";
import { discountPrice, formatPrice } from "@/lib/utils";
import { memo } from "react";

interface Props {
  item:
    | GetServicesItemQuery["services_by_id"]["serviceItemDirections"][0]["item"]["items"][0]
    | GetServicesItemQuery["services_by_id"]["serviceItemDirections"][0]["item"]["subDirections"][0]["subDirections_id"]["items"][0];
}

const DirectionItem = memo(({ item }: Props) => {
  return (
    <div
      className={classNames(
        "relative flex flex-col border-b-4 border-[#F4F4F4]",
        {
          "after:absolute after:h-full after:border-l-[4px] after:border-[#F5DF8F]":
            item.directionItem_id.sale > 0,
        },
        {
          "rounded-t-[4px] after:absolute after:bottom-0 after:h-full after:border-l-[4px] after:border-[#C9EA93]":
            item.directionItem_id.is_new,
        },
      )}
    >
      <div className="flex justify-between px-[40px] py-8">
        <div className="flex flex-col justify-between gap-1">
          <div className="flex gap-2">
            <p className="text-[32px] font-medium leading-[38px]">
              {item.directionItem_id.title}
            </p>

            {item.directionItem_id.sale > 0 && (
              <span className="rounded-full bg-[#F5DF8F] px-[15px] py-2 text-[18px] font-semibold uppercase leading-[23px] text-[#665107]">
                SALE {item.directionItem_id.sale}%
              </span>
            )}

            {item.directionItem_id.is_new && (
              <span className="rounded-full bg-[#C9EA93] px-[15px] py-2 text-[18px] font-semibold uppercase leading-[23px] text-[#406700]">
                NEW
              </span>
            )}
          </div>

          {item.directionItem_id.desc && (
            <span className="text-[24px] leading-[28px] text-[#656565]">
              {item.directionItem_id.desc}
            </span>
          )}
        </div>

        <div className="flex flex-col items-end justify-start">
          {item.directionItem_id.sale > 0 ? (
            <>
              <span className="text-[28px] font-medium leading-[33px]">
                {discountPrice(
                  item.directionItem_id.sale,
                  item.directionItem_id.price,
                  true,
                )}{" "}
                ₽
              </span>

              <span className="text-[24px] font-medium leading-[28px] text-[#8B8B8B] line-through">
                {item.directionItem_id.price} ₽
              </span>
            </>
          ) : (
            <span className="text-[28px] font-medium leading-[33px]">
              {formatPrice(item.directionItem_id.price)} ₽
            </span>
          )}
        </div>
      </div>
    </div>
  );
});

export { DirectionItem };
