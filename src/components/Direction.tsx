import { GetServicesItemQuery } from "@/graphql/__generated__";
import { DirectionItem } from "./DirectionItem";
import { memo, useEffect } from "react";

const Direction = memo(
  ({
    el,
    refs,
  }: {
    el: GetServicesItemQuery["services_by_id"]["serviceItemDirections"][0];
    refs: React.MutableRefObject<HTMLElement[]>;
  }) => {
    useEffect(() => {
      const sections = document.querySelectorAll("[data-section='true']");

      sections.forEach((section, index) => {
        refs.current[index] = section as HTMLElement;
        section.setAttribute("data-section-id", `${index + 1}`);
      });
    }, [refs]);

    return (
      <section>
        <div data-section="true">
          <div className="grid grid-cols-[125px_1.5fr_125px] gap-[47px] pb-[42px]">
            <div className="flex-1"></div>

            <h2 className="second-family text-center text-[80px] font-semibold leading-[88px]">
              {el.item.title}
            </h2>

            {el.item.moreDetails && (
              <button className="h-fit self-end rounded-full bg-[#DEDEDE] px-[14px] py-[10px] font-medium">
                Подробнее
              </button>
            )}
          </div>

          <div className="rounded-t-3xl bg-white">
            {el.item.items.map((item) => {
              return <DirectionItem key={item.id} item={item} />;
            })}
          </div>
        </div>

        {el.item.subDirections &&
          el.item.subDirections.map((el) => {
            return (
              <div
                data-section="true"
                className="pt-[96px]"
                key={el.subDirections_id.id}
              >
                <div className="grid grid-cols-[125px_1.5fr_125px] gap-[47px] pb-[42px]">
                  <div className="flex-1"></div>

                  <h3 className="second-family max-w-[768px] text-center text-[48px] font-semibold leading-[53px]">
                    {el.subDirections_id.title}
                  </h3>

                  {el.subDirections_id.moreDetails && (
                    <button className="h-fit self-end rounded-full bg-[#DEDEDE] px-[14px] py-[10px] font-medium">
                      Подробнее
                    </button>
                  )}
                </div>

                <div className="rounded-t-3xl bg-white">
                  {el.subDirections_id.items.map((item) => {
                    return (
                      <DirectionItem
                        key={item.directionItem_id.id}
                        item={item}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
      </section>
    );
  },
);

export { Direction };
