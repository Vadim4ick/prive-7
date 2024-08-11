import classNames from "classnames";
import { discountPrice, formatPrice } from "@/lib/utils";
import { memo } from "react";
import { ServiceFragmentFragment } from "@/graphql/__generated__";

interface Props {
  item: ServiceFragmentFragment;
}

const DirectionItem = memo(({ item }: Props) => {
  return (
    <div
      className={classNames(
        "relative flex flex-col border-b-4 border-[#F4F4F4]",
        {
          "after:absolute after:h-full after:border-l-[4px] after:border-[#F5DF8F]":
            item.sale > 0,
        },
        {
          "rounded-t-[4px] after:absolute after:bottom-0 after:h-full after:border-l-[4px] after:border-[#C9EA93]":
            item.is_new,
        },
      )}
    >
      <div className="flex justify-between px-[40px] py-8">
        <div className="flex flex-col justify-between gap-1">
          <div className="flex gap-2">
            <p className="text-[32px] font-medium leading-[38px]">
              {item.title}
            </p>

            {item.sale > 0 && (
              <span className="rounded-full bg-[#F5DF8F] px-[15px] py-2 text-[18px] font-semibold uppercase leading-[23px] text-[#665107]">
                SALE {item.sale}%
              </span>
            )}

            {item.is_new && (
              <span className="rounded-full bg-[#C9EA93] px-[15px] py-2 text-[18px] font-semibold uppercase leading-[23px] text-[#406700]">
                NEW
              </span>
            )}
          </div>

          {item.desc && (
            <span className="text-[24px] leading-[28px] text-[#656565]">
              {item.desc}
            </span>
          )}
        </div>

        <div className="flex flex-col items-end justify-start">
          {item.sale > 0 ? (
            <>
              <span className="text-[28px] font-medium leading-[33px]">
                {discountPrice(item.sale, item.price, true)} ₽
              </span>

              <span className="text-[24px] font-medium leading-[28px] text-[#8B8B8B] line-through">
                {item.price} ₽
              </span>
            </>
          ) : (
            <span className="text-[28px] font-medium leading-[33px]">
              {formatPrice(item.price)} ₽
            </span>
          )}
        </div>
      </div>
    </div>
  );
});

export { DirectionItem };
