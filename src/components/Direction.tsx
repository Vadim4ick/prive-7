import { GetServicesItemQuery } from "@/graphql/__generated__";
import { DirectionItem } from "./DirectionItem";

const Direction = ({
  el,
}: {
  el: GetServicesItemQuery["services_by_id"]["serviceItemDirections"][0];
}) => {
  return (
    <section>
      <div>
        <h2 className="second-family pb-[42px] text-center text-[80px] font-semibold leading-[88px]">
          {el.item.title}
        </h2>

        <div className="rounded-t-3xl bg-white">
          {el.item.items.map((item) => {
            return <DirectionItem key={item.id} item={item} />;
          })}
        </div>
      </div>

      {el.item.subDirections &&
        el.item.subDirections.map((el) => {
          return (
            <div className="pt-[96px]" key={el.subDirections_id.id}>
              <div className="flex justify-end gap-[47px] pb-[42px]">
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
                {el.subDirections_id.items.map((el) => {
                  return (
                    <DirectionItem key={el.directionItem_id.id} item={el} />
                  );
                })}
              </div>
            </div>
          );
        })}
    </section>
  );
};

export { Direction };
