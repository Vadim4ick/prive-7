import { AccordionsFragmentFragment } from "@/graphql/__generated__";
import { AccordionServices } from "./AccordionServices";
import { Accordion } from "./ui/accordion";

const AccordionSection = ({ el }: { el: AccordionsFragmentFragment }) => {
  return (
    <section
      id={el.id}
      className="pt-[120px]"
      key={el.id}
      data-accordion="true"
    >
      <h2 className="second-family pb-[20px] text-center text-[40px] font-semibold leading-[44px]">
        {el.title}
      </h2>

      <Accordion
        type="single"
        collapsible
        className="flex w-full flex-col gap-[48px]"
      >
        {el.items.map((accordion) => {
          return (
            <div key={accordion.id}>
              <h4 className="pb-[20px] text-[24px] leading-[26.5px]">
                {accordion.accordionBlock_id.title}
              </h4>

              <div className="overflow-hidden rounded-t-[6px] bg-white">
                {accordion.accordionBlock_id.items.map((item, idx) => {
                  return <AccordionServices key={idx} item={item} />;
                })}
              </div>
            </div>
          );
        })}
      </Accordion>
    </section>
  );
};

export { AccordionSection };
