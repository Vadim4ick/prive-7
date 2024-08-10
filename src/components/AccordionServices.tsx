import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowAccordion } from "@/shared/icons/ArrowAccordion";

interface Props {
  item: {
    id: string | number;
    title: string;
    desc: string;
    price: number;
    content: string;
  };
}

const AccordionServices = (props: Props) => {
  const { item } = props;

  return (
    <AccordionItem value={`item-${item.id}`}>
      <AccordionTrigger className="flex py-8 pl-[14px] pr-[40px] [&[data-state=open]>div>div>svg]:-rotate-90">
        <div className="flex items-center gap-4">
          <div className="flex h-[40px] w-[32px] items-center justify-center rounded-full bg-[#EDEDED]">
            <ArrowAccordion className="shrink-0 transition-transform duration-200" />
          </div>

          <div className="flex flex-col justify-between gap-1">
            <div className="flex gap-2">
              <p className="text-[32px] font-medium leading-[38px]">
                {item.title}
              </p>

              {/* {item.bage && (
                <span className="rounded-full bg-[#F5DF8F] px-[15px] py-2 text-[18px] font-semibold uppercase leading-[23px] text-[#665107]">
                  SALE 15%
                </span>
              )} */}
            </div>

            {item.desc && (
              <span className="text-[24px] leading-[28px] text-[#656565]">
                {item.desc}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col items-end justify-end">
          <span className="text-[28px] font-medium leading-[33px]">
            {item.price} ₽
          </span>
          {/* {item.bage && (
            <span className="text-[24px] font-medium leading-[28px] text-[#8B8B8B] line-through">
              5000 ₽
            </span>
          )} */}
        </div>
      </AccordionTrigger>

      <AccordionContent className="px-[62px] pb-[90px] text-[28px] leading-[33px] text-[#494949]">
        {item.content}
      </AccordionContent>
    </AccordionItem>
  );
};

export { AccordionServices };
