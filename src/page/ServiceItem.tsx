import { Header } from "../components/Header";
import { SliderBanner } from "./SliderBanner";
import { Direction } from "../components/Direction";
import { AccordionServices } from "@/components/AccordionServices";
import { Accordion } from "@radix-ui/react-accordion";
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

const accordions = [
  {
    title: "Косметологические уходы",

    accordions: [
      {
        title: "QMS",

        items: [
          {
            id: 1,
            title: "Комбинированная",
            desc: "(механическая + ультразвуковая)",
            price: 5500,

            content:
              "(Эксклюзивный уход с инновационной сывороткой с коллагеном. Моментально попадает в дерму и активно работает изнутри, замедляя процессы старения в коже. Применение пенной маски с уникальным составом, сделает процедуру незабываемой и дополнительно поможет избавится от пигментации. В результате моментальное увлажнение на 210%, сокращение морщин на 20%, осветление пигментации, восстановление плотности, тургора и эластичности. Видимый результат после первй процедуры с последующим усилением эффекта)",
          },
          {
            id: 2,
            title: "Комбинированная",
            desc: "(механическая + ультразвуковая)",
            price: 5500,
            content:
              "(Эксклюзивный уход с инновационной сывороткой с коллагеном. Моментально попадает в дерму и активно работает изнутри, замедляя процессы старения в коже. Применение пенной маски с уникальным составом, сделает процедуру незабываемой и дополнительно поможет избавится от пигментации. В результате моментальное увлажнение на 210%, сокращение морщин на 20%, осветление пигментации, восстановление плотности, тургора и эластичности. Видимый результат после первй процедуры с последующим усилением эффекта)",
          },
          {
            id: 3,
            title: "Комбинированная",
            desc: "(механическая + ультразвуковая)",
            price: 5500,
            content:
              "(Эксклюзивный уход с инновационной сывороткой с коллагеном. Моментально попадает в дерму и активно работает изнутри, замедляя процессы старения в коже. Применение пенной маски с уникальным составом, сделает процедуру незабываемой и дополнительно поможет избавится от пигментации. В результате моментальное увлажнение на 210%, сокращение морщин на 20%, осветление пигментации, восстановление плотности, тургора и эластичности. Видимый результат после первй процедуры с последующим усилением эффекта)",
          },
          {
            id: 4,
            title: "Комбинированная",
            desc: "(механическая + ультразвуковая)",
            price: 5500,
            content:
              "(Эксклюзивный уход с инновационной сывороткой с коллагеном. Моментально попадает в дерму и активно работает изнутри, замедляя процессы старения в коже. Применение пенной маски с уникальным составом, сделает процедуру незабываемой и дополнительно поможет избавится от пигментации. В результате моментальное увлажнение на 210%, сокращение морщин на 20%, осветление пигментации, восстановление плотности, тургора и эластичности. Видимый результат после первй процедуры с последующим усилением эффекта)",
          },
          {
            id: 5,
            title: "Комбинированная",
            desc: "(механическая + ультразвуковая)",
            price: 5500,
            content:
              "(Эксклюзивный уход с инновационной сывороткой с коллагеном. Моментально попадает в дерму и активно работает изнутри, замедляя процессы старения в коже. Применение пенной маски с уникальным составом, сделает процедуру незабываемой и дополнительно поможет избавится от пигментации. В результате моментальное увлажнение на 210%, сокращение морщин на 20%, осветление пигментации, восстановление плотности, тургора и эластичности. Видимый результат после первй процедуры с последующим усилением эффекта)",
          },
        ],
      },
    ],
  },
];

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

            <div className="pb-[39px]">
              <SliderBanner />
            </div>

            <div className="grid grid-cols-2 gap-[18px]">
              {titlesAndIds.length > 0 && buttonScroll}
            </div>
          </section>

          <div className="flex flex-col gap-[180px] pb-[218px]">
            {data &&
              data.services_by_id.serviceItemDirections.map((el) => {
                return (
                  <Direction key={el.item.id} el={el} refs={sectionRefs} />
                );
              })}

            {accordions.map((el) => {
              return (
                <section key={el.title}>
                  <h2 className="second-family pb-[42px] text-center text-[80px] font-semibold leading-[88px]">
                    {el.title}
                  </h2>

                  <Accordion type="single" collapsible className="w-full">
                    {el.accordions.map((accordion) => {
                      return (
                        <div key={accordion.title}>
                          <h4 className="pb-[42px] text-[48px] leading-[57px]">
                            {accordion.title}
                          </h4>

                          <div className="rounded-t-3xl bg-white">
                            {accordion.items.map((item, idx) => {
                              return (
                                <AccordionServices key={idx} item={item} />
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </Accordion>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
});

export { ServiceItem };
