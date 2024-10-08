import classNames from "classnames";
import { discountPrice, formatPrice } from "@/lib/utils";
import { memo } from "react";
import { ServiceFragmentFragment } from "@/graphql/__generated__";
import { ArrowAccordion } from "@/shared/icons/ArrowAccordion";

interface Props {
  item: ServiceFragmentFragment;
  type?: "default" | "accordion";
}

const DirectionItem = memo(({ item, type = "default" }: Props) => {
  const TitleAndLabels = () => (
    <div className="flex gap-[4.5px]">
      <p className="text-[18px] font-medium leading-[22px]">{item.title}</p>

      {item.sale > 0 && (
        <span className="mt-[2px] h-fit rounded-full bg-[#F5DF8F] px-[8px] py-[4px] text-[10px] font-semibold uppercase leading-[12px] text-[#665107]">
          SALE {item.sale}%
        </span>
      )}

      {item.is_new && (
        <span className="mt-[2px] h-fit rounded-full bg-[#C9EA93] px-[8px] py-[4px] text-[10px] font-semibold uppercase leading-[12px] text-[#406700]">
          NEW
        </span>
      )}
    </div>
  );

  const PriceSection = () => {
    if (item.is_fromPrice) {
      return (
        <div className="flex items-center gap-2 text-[16px] font-medium leading-[20px]">
          <span>от</span> {discountPrice(item.sale, item.price, true)} ₽
        </div>
      );
    }

    return (
      <div className="flex flex-col items-end justify-start">
        {item.sale > 0 ? (
          <>
            <span className="text-[16px] font-medium leading-[20px]">
              {discountPrice(item.sale, item.price, true)} ₽
            </span>
            <span className="text-[13px] font-medium leading-[16px] text-[#8B8B8B] line-through">
              {formatPrice(item.price)} ₽
            </span>
          </>
        ) : (
          <span className="text-[16px] font-medium leading-[20px]">
            {formatPrice(item.price)} ₽
          </span>
        )}
      </div>
    );
  };
  if (type === "accordion") {
    return (
      <>
        <div className="flex items-center gap-[8px]">
          <div className="flex h-[22px] w-[18px] items-center justify-center rounded-full bg-[#EDEDED]">
            <ArrowAccordion className="h-[6px] shrink-0 transition-transform duration-200" />
          </div>

          <div className="flex flex-col items-start justify-between gap-1">
            <TitleAndLabels />

            {item.desc && (
              <span className="text-[13px] leading-[17px] text-[#656565]">
                {item.desc}
              </span>
            )}
          </div>
        </div>

        <PriceSection />
      </>
    );
  }

  return (
    <div
      className={classNames(
        "relative flex flex-col border-[#F4F4F4] bg-white [&:not(:last-child)]:border-b-4",
        {
          "after:absolute after:h-full after:border-l-[4px] after:border-[#F5DF8F]":
            item.sale > 0,
        },
        {
          "after:absolute after:bottom-0 after:h-full after:border-l-[4px] after:border-[#C9EA93]":
            item.is_new,
        },
      )}
    >
      <div className="flex justify-between px-[22px] py-[18px]">
        <div className="flex flex-col justify-center gap-[2px]">
          <TitleAndLabels />

          {item.desc && (
            <span className="text-[13px] leading-[17px] text-[#656565]">
              {item.desc}
            </span>
          )}
        </div>

        <PriceSection />
      </div>
    </div>
  );
});

export { DirectionItem };
