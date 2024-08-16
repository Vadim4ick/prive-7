import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionBlockFragment } from "@/graphql/__generated__";
import { cn } from "@/lib/utils";
import { memo, useEffect, useRef, useState } from "react";
import { DirectionItem } from "./DirectionItem";

interface Props {
  item: AccordionBlockFragment;
}

const AccordionServices = memo((props: Props) => {
  const { item } = props;

  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen && accordionRef.current) {
      // Скролл до аккордеона после того, как он стал открытым
      (accordionRef.current as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isOpen]);
  // const offset = 50; // Настройте смещение по вашему усмотрению
  // const element = accordionRef.current;
  // const top = element.getBoundingClientRect().top + window.scrollY;
  // window.scrollTo({ top: top - offset, behavior: "smooth" });

  return (
    <AccordionItem
      className={cn(
        "relative bg-white",
        {
          "after:absolute after:bottom-0 after:left-0 after:h-full after:border-l-[4px] after:border-[#F5DF8F]":
            item.accordionItems_id.directionItem.sale > 0,
        },
        {
          "after:absolute after:bottom-0 after:h-full after:border-l-[4px] after:border-[#C9EA93]":
            item.accordionItems_id.directionItem.is_new,
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
          item={item.accordionItems_id.directionItem}
        />
      </AccordionTrigger>

      <AccordionContent className="pb-[48px] pl-[34px] pr-[22px] text-[16px] leading-[20px] text-[#494949]">
        <p ref={accordionRef}> {item.accordionItems_id.value}</p>
      </AccordionContent>
    </AccordionItem>
  );
});

export { AccordionServices };
