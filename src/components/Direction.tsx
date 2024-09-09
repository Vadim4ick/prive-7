import { DirectionsFragmentFragment } from "@/graphql/__generated__";
import { memo, useEffect, useRef, useState } from "react";
import { Modal } from "./Modal";
import { DirectionItem } from "./DirectionItem";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { cn } from "@/lib/utils";

const Direction = memo(
  ({
    el,
    refs,
  }: {
    el: DirectionsFragmentFragment;
    refs: React.MutableRefObject<HTMLElement[]>;
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    const accordionRef = useRef(null);

    const handleToggle = () => {
      setIsOpen((prev) => !prev);
    };

    useEffect(() => {
      const sections = document.querySelectorAll("[data-section='true']");
      // const accordions = document.querySelectorAll("[data-accordion='true']");

      // Очищаем refs перед добавлением новых элементов
      refs.current = [];

      // Добавляем секции в refs и устанавливаем data-section-id
      sections.forEach((section) => {
        refs.current.push(section as HTMLElement);
        section.setAttribute("data-section-id", `${section.id}`);
      });

      // Добавляем аккордеоны в refs и устанавливаем data-accordion-id
      // accordions.forEach((accordion) => {
      //   refs.current.push(accordion as HTMLElement);
      //   accordion.setAttribute("data-accordion-id", `${accordion.id}`);
      // });
    }, [refs]);

    useEffect(() => {
      if (isOpen && accordionRef.current) {
        // Скролл до аккордеона после того, как он стал открытым
        (accordionRef.current as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, [isOpen]);

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

          <div className={"overflow-hidden rounded-[8px]"}>
            {el &&
              el.items.map((item) => {
                if (item.directionItem_id.value) {
                  return (
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-[48px]"
                    >
                      <AccordionItem
                        className={cn(
                          "relative bg-white",
                          {
                            "after:absolute after:bottom-0 after:left-0 after:h-full after:border-l-[4px] after:border-[#F5DF8F]":
                              item.directionItem_id.sale > 0,
                          },
                          {
                            "after:absolute after:bottom-0 after:h-full after:border-l-[4px] after:border-[#C9EA93]":
                              item.directionItem_id.is_new,
                          },
                        )}
                        value={`item-${item.id}`}
                      >
                        <AccordionTrigger
                          onClick={handleToggle}
                          className="flex py-[18.5px] pl-[8px] pr-[22px] [&[data-state=open]>div>div>svg]:-rotate-90"
                        >
                          <DirectionItem
                            type="accordion"
                            key={item.id}
                            item={item.directionItem_id}
                          />
                        </AccordionTrigger>

                        <AccordionContent className="pb-[48px] pl-[34px] pr-[22px] text-[16px] leading-[20px] text-[#494949]">
                          <p ref={accordionRef}>
                            {" "}
                            {item.directionItem_id.value}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  );
                }

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

                <div className="overflow-hidden rounded-[8px]">
                  {el.subDirections_id.items.map((item) => {
                    if (item.directionItem_id.value) {
                      return (
                        <Accordion
                          type="single"
                          collapsible
                          className="flex w-full flex-col gap-[48px]"
                        >
                          <AccordionItem
                            className={cn(
                              "relative bg-white",
                              {
                                "after:absolute after:bottom-0 after:left-0 after:h-full after:border-l-[4px] after:border-[#F5DF8F]":
                                  item.directionItem_id.sale > 0,
                              },
                              {
                                "after:absolute after:bottom-0 after:h-full after:border-l-[4px] after:border-[#C9EA93]":
                                  item.directionItem_id.is_new,
                              },
                            )}
                            value={`item-${item.id}`}
                          >
                            <AccordionTrigger
                              onClick={handleToggle}
                              className="flex py-[18.5px] pl-[8px] pr-[22px] [&[data-state=open]>div>div>svg]:-rotate-90"
                            >
                              <DirectionItem
                                type="accordion"
                                key={item.id}
                                item={item.directionItem_id}
                              />
                            </AccordionTrigger>

                            <AccordionContent className="pb-[48px] pl-[34px] pr-[22px] text-[16px] leading-[20px] text-[#494949]">
                              <p ref={accordionRef}>
                                {" "}
                                {item.directionItem_id.value}
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      );
                    }

                    return (
                      <DirectionItem
                        key={item.id}
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
