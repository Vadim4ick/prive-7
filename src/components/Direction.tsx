import { DirectionsFragmentFragment } from "@/graphql/__generated__";
import { memo, useEffect } from "react";
import { Modal } from "./Modal";
import { DirectionItem } from "./DirectionItem";

const Direction = memo(
  ({
    el,
    refs,
  }: {
    el: DirectionsFragmentFragment;
    refs: React.MutableRefObject<HTMLElement[]>;
  }) => {
    useEffect(() => {
      const sections = document.querySelectorAll("[data-section='true']");
      const accordions = document.querySelectorAll("[data-accordion='true']");

      // Очищаем refs перед добавлением новых элементов
      refs.current = [];

      // Добавляем секции в refs и устанавливаем data-section-id
      sections.forEach((section) => {
        refs.current.push(section as HTMLElement);
        section.setAttribute("data-section-id", `${section.id}`);
      });

      // Добавляем аккордеоны в refs и устанавливаем data-accordion-id
      accordions.forEach((accordion) => {
        refs.current.push(accordion as HTMLElement);
        accordion.setAttribute("data-accordion-id", `${accordion.id}`);
      });
    }, [refs]);

    return (
      <section>
        <div id={el.id} data-section="true" className="pt-[120px]">
          <div className="grid grid-cols-[70px_1.5fr_70px] gap-[48px] pb-[20px]">
            <div className="flex-1"></div>

            <h2 className="second-family text-center text-[40px] font-semibold leading-[44px]">
              {el.title}
            </h2>

            {el.moreDetails && (
              <Modal title={el.title} description={el.moreDetails} />
            )}
          </div>

          <div className={"overflow-hidden rounded-t-[6px] bg-white"}>
            {el &&
              el.items.map((item) => {
                return (
                  <DirectionItem key={item.id} item={item.directionItem_id} />
                );
              })}
          </div>
        </div>

        {el.subDirections &&
          el.subDirections.map((el) => {
            return (
              <div className="pt-[48px]" key={el.subDirections_id.id}>
                <div className="grid grid-cols-[70px_1.5fr_70px] gap-[48px] pb-[20px]">
                  <div className="flex-1"></div>

                  <h2 className="second-family text-center text-[24px] font-semibold leading-[26px]">
                    {el.subDirections_id.title}
                  </h2>

                  {el.subDirections_id.moreDetails && (
                    <Modal
                      titleFont="second"
                      title={el.subDirections_id.title}
                      description={el.subDirections_id.moreDetails}
                    />
                  )}
                </div>

                <div className="overflow-hidden rounded-t-[6px] bg-white">
                  {el.subDirections_id.items.map((item) => {
                    return (
                      <DirectionItem
                        key={item.directionItem_id.id}
                        item={item.directionItem_id}
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
