import { Header } from "../components/Header";
import { SliderBanner } from "../components/SliderBanner";
import { Direction } from "../components/Direction";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import {
  GetServicesItemDocument,
  GetServicesItemQuery,
} from "@/graphql/__generated__";
import { extractTitles } from "@/lib/utils";
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

const ServiceItem = memo(() => {
  const { id } = useParams();

  const sectionRefs = useRef<HTMLElement[]>([]);
  const [titlesAndIds, setTitlesAndIds] = useState<
    { title: string; id: string }[]
  >([]);

  const { loading, error, data } = useQuery<GetServicesItemQuery>(
    GetServicesItemDocument,
    {
      variables: { id: id },
    },
  );

  useEffect(() => {
    if (data) {
      const extractedTitles = data.services_by_id.serviceItemDirections.flatMap(
        (dir) =>
          extractTitles(dir.item).map(({ id, title }) => ({
            id: id.toString(), // Преобразование id в строку
            title,
          })),
      );

      setTitlesAndIds(extractedTitles);
    }
  }, [data]);

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const scrollElementId = e.currentTarget.dataset.scroll;
      const scrollElement =
        sectionRefs.current[parseInt(scrollElementId || "0", 10) - 1];

      if (scrollElement) {
        scrollElement.scrollIntoView({ behavior: "smooth" });
      }
    },
    [],
  );

  const buttonScroll = useMemo(() => {
    return titlesAndIds.map((el) => {
      return <ButtonScroll key={el.id} el={el} onClick={onClick} />;
    });
  }, [titlesAndIds]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="min-h-screen bg-[#F4F4F4]">
      <Header title={data?.services_by_id.title} />

      <div className="pt-[48px]">
        <div className="container">
          <section className="pb-[180px]">
            <h2 className="second-family pb-[40px] text-center text-[80px] font-semibold leading-[88px]">
              {data?.services_by_id.title}
            </h2>

            {data && data.services_by_id.slider && (
              <div className="pb-[39px]">
                <SliderBanner slider={data.services_by_id.slider} />
              </div>
            )}

            <div className="grid grid-cols-2 gap-[18px]">
              {titlesAndIds.length > 0 && buttonScroll}
            </div>
          </section>

          <div className="flex flex-col gap-[180px] pb-[218px]">
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
