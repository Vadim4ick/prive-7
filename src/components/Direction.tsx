import { DirectionSection } from "../page/ServiceItem";
import { DirectionItem } from "./DirectionItem";

const Direction = ({ el }: { el: DirectionSection }) => {
  return (
    <section key={el.title}>
      <div>
        <h2 className="second-family pb-[42px] text-center text-[80px] font-semibold leading-[88px]">
          {el.title}
        </h2>

        <div className="rounded-t-3xl bg-white">
          {el.directions.map((item, idx) => {
            return <DirectionItem key={idx} item={item} />;
          })}
        </div>
      </div>

      {el.subcategory && (
        <div className="pt-[96px]">
          <div className="flex justify-end gap-[47px] pb-[42px]">
            <h3 className="second-family max-w-[768px] text-center text-[48px] font-semibold leading-[53px]">
              {el.subcategory.title}
            </h3>

            {el.subcategory.moreDetailsBtn && (
              <button className="h-fit self-end rounded-full bg-[#DEDEDE] px-[14px] py-[10px] font-medium">
                Подробнее
              </button>
            )}
          </div>

          <div className="rounded-t-3xl bg-white">
            {el.subcategory.directions.map((el, idx) => {
              return <DirectionItem key={idx} item={el} />;
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export { Direction };
