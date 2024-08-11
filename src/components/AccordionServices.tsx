import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionBlockFragment } from "@/graphql/__generated__";
import { cn } from "@/lib/utils";
import { memo } from "react";
import { DirectionItem } from "./DirectionItem";

interface Props {
  item: AccordionBlockFragment;
}

const AccordionServices = memo((props: Props) => {
  const { item } = props;

  return (
    <AccordionItem
      className={cn(
        "relative",
        {
          "after:absolute after:bottom-0 after:left-0 after:h-full after:border-l-[4px] after:border-[#F5DF8F]":
            item.accordionItems_id.directionItem.sale > 0,
        },
        {
          "rounded-t-[4px] after:absolute after:bottom-0 after:h-full after:border-l-[4px] after:border-[#C9EA93]":
            item.accordionItems_id.directionItem.is_new,
        },
      )}
      value={`item-${item.id}`}
    >
      <AccordionTrigger className="flex py-8 pl-[14px] pr-[40px] [&[data-state=open]>div>div>svg]:-rotate-90">
        <DirectionItem
          type="accordion"
          item={item.accordionItems_id.directionItem}
        />
      </AccordionTrigger>

      <AccordionContent className="px-[62px] pb-[90px] text-[28px] leading-[33px] text-[#494949]">
        {item.accordionItems_id.value}
      </AccordionContent>
    </AccordionItem>
  );
});

export { AccordionServices };
