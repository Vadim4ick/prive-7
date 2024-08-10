import classNames from "classnames";
import { Direction as DirectionType } from "../page/ServiceItem";

const DirectionItem = ({ item }: { item: DirectionType }) => {
  return (
    <div
      className={classNames(
        "relative flex flex-col border-b-4 border-[#F4F4F4]",
        {
          "after:absolute after:h-full after:border-l-[4px] after:border-[#F5DF8F]":
            item.bage,
        },
      )}
    >
      <div className="flex justify-between px-[40px] py-8">
        <div className="flex flex-col justify-between gap-1">
          <div className="flex gap-2">
            <p className="text-[32px] font-medium leading-[38px]">
              {item.title}
            </p>

            {item.bage && (
              <span className="rounded-full bg-[#F5DF8F] px-[15px] py-2 text-[18px] font-semibold uppercase leading-[23px] text-[#665107]">
                SALE 15%
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
          <span className="text-[28px] font-medium leading-[33px]">
            {item.price} ₽
          </span>

          {item.bage && (
            <span className="text-[24px] font-medium leading-[28px] text-[#8B8B8B] line-through">
              5000 ₽
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export { DirectionItem };
