import { AccordionsFragmentFragment } from "@/graphql/__generated__";
import { AccordionServices } from "./AccordionServices";
import { Accordion } from "./ui/accordion";

const AccordionSection = ({ el }: { el: AccordionsFragmentFragment }) => {
  return (
    <section key={el.id} data-section="true">
      <h2 className="second-family pb-[42px] text-center text-[80px] font-semibold leading-[88px]">
        {el.title}
      </h2>

      <Accordion
        type="single"
        collapsible
        className="flex w-full flex-col gap-[96px]"
      >
        {el.items.map((accordion) => {
          return (
            <div key={accordion.id}>
              <h4 className="pb-[42px] text-[48px] leading-[57px]">
                {accordion.accordionBlock_id.title}
              </h4>

              <div className="overflow-hidden rounded-t-3xl bg-white">
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
