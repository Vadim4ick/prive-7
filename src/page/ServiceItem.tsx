import { Header } from "../components/Header";
import { SliderBanner } from "../components/SliderBanner";
import { Direction } from "../components/Direction";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import {
  GetServicesItemDocument,
  GetServicesItemQuery,
} from "@/graphql/__generated__";
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ButtonScroll } from "@/components/ButtonScroll";
import { AccordionSection } from "@/components/AccordionSection";
import { Loader } from "@/components/ui/loader";

const ServiceItem = memo(() => {
  const { id } = useParams();

  const sectionRefs = useRef<HTMLElement[]>([]);
  const [titlesAndIds, setTitlesAndIds] = useState<
    { title: string; id: string; section: string }[]
  >([]);

  const { loading, error, data } = useQuery<GetServicesItemQuery>(
    GetServicesItemDocument,
    {
      variables: { id: id },
    },
  );

  useEffect(() => {
    if (data) {
      const arr = [] as { title: string; id: string; section: string }[];

      data.services_by_id.serviceItemDirections.map((el) => {
        arr.push({
          title: el.item.title,
          id: el.item.id.toString(),
          section:
            el.item.__typename === "accordionsSection"
              ? "accordion"
              : "section",
        });
      });

      setTitlesAndIds(arr);
    }
  }, [data]);

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const [sectionName, id] = e.currentTarget.dataset.scroll?.split(
        "-",
      ) as string[];

      const elementToScroll = sectionRefs.current.find(
        (element) => element.getAttribute(`data-${sectionName}-id`) == id,
      );

      if (elementToScroll) {
        elementToScroll.scrollIntoView({ behavior: "smooth" });
      }
    },
    [],
  );

  const buttonScroll = useMemo(() => {
    return titlesAndIds.map((el) => {
      return (
        <ButtonScroll
          key={`${el.section}-${el.id}`}
          el={el}
          onClick={onClick}
        />
      );
    });
  }, [onClick, titlesAndIds]);

  if (loading)
    return (
      <div className="z-50 h-screen w-full bg-white">
        <Loader className="absolute left-1/2 top-1/2 size-10" />
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="min-h-screen bg-[#F4F4F4]">
      <Header title={data?.services_by_id.title} />

      <div className="pt-[var(--header-height)_+_48px]">
        <div className="container">
          <section className="pt-[calc(var(--header-height)_+_24px)]">
            <h2 className="second-family pb-[20px] text-center text-[40px] font-semibold leading-[44px]">
              {data?.services_by_id.title}
            </h2>

            {data && data.services_by_id.slider && (
              <div className="pb-[20px]">
                <SliderBanner slider={data.services_by_id.slider} />
              </div>
            )}

            <div className="grid grid-cols-2 gap-[18px]">
              {titlesAndIds.length > 0 && buttonScroll}
            </div>
          </section>

          <div className="flex flex-col px-1 pb-[200px]">
            {data &&
              data.services_by_id.serviceItemDirections.map((el) => {
                if (el.item.__typename === "directions") {
                  return (
                    <Direction key={el.id} el={el.item} refs={sectionRefs} />
                  );
                } else if (el.item.__typename === "accordionsSection") {
                  return <AccordionSection key={el.id} el={el.item} />;
                }
              })}
          </div>
        </div>
      </div>
    </main>
  );
});

export { ServiceItem };
