// import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { SliderBanner } from "./SliderBanner";
import { ArrowLink } from "../shared/icons/ArrowLink";
import { Direction } from "../components/Direction";
import { AccordionServices } from "@/components/AccordionServices";
import { Accordion } from "@radix-ui/react-accordion";

export interface Direction {
  title: string;
  price: number;
  desc?: string;
  bage?: {
    title: string;
    value: string;
  };
}

export interface DirectionSection {
  title: string;

  directions: Direction[];

  subcategory?: {
    title: string;
    moreDetailsBtn: string;
    directions: Direction[];
  };
}

const arr: DirectionSection[] = [
  {
    title: "Чистки",

    directions: [
      {
        title: "Комбинированная",
        desc: "(механическая + ультразвуковая)",
        price: 5500,
      },
      {
        title: "Комбинированная",
        desc: "(механическая + ультразвуковая)",
        price: 5500,
      },
      {
        title: "Комбинированная",
        desc: "(механическая + ультразвуковая)",
        price: 5500,
      },
      {
        title: "Комбинированная",
        price: 5500,
      },
    ],

    subcategory: {
      title: "Лазерная эпиляция Candela GentleLase Pro-U для женщин",

      moreDetailsBtn: "text...",

      directions: [
        {
          title: "Комбинированная",
          desc: "(механическая + ультразвуковая)",
          price: 5500,
        },
        {
          title: "Комбинированная",
          desc: "(механическая + ультразвуковая)",
          price: 5500,
        },
        {
          title: "Комбинированная",
          desc: "(механическая + ультразвуковая)",
          price: 5500,
        },
        {
          title: "Комбинированная",
          price: 5500,
        },
      ],
    },
  },
  {
    title: "Пилинги",

    directions: [
      {
        title: "Комбинированная",
        desc: "(механическая + ультразвуковая)",
        price: 5500,
      },
      {
        title: "Комбинированная",
        desc: "(механическая + ультразвуковая)",
        price: 5500,
      },
      {
        title: "Комбинированная",
        desc: "(механическая + ультразвуковая)",
        price: 5500,
        bage: {
          title: "sale",
          value: "15%",
        },
      },
      {
        title: "Комбинированная",
        price: 5500,
        bage: {
          title: "new",
          value: "new",
        },
      },
    ],
  },
];

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

const ServiceItem = () => {
  //   const { id } = useParams();

  return (
    <main className="min-h-screen bg-[#F4F4F4]">
      <Header />

      <div className="pt-[48px]">
        <div className="container">
          <section className="pb-[180px]">
            <h2 className="second-family pb-[40px] text-center text-[80px] font-semibold leading-[88px]">
              Косметология
            </h2>

            <div className="pb-[39px]">
              <SliderBanner />
            </div>

            <div className="grid grid-cols-2 gap-[18px]">
              <button className="flex h-[82px] w-full items-center justify-between rounded-full border border-[#DDDDDD] bg-[#E9E9E9] px-8 text-[28px] font-medium leading-[33px]">
                Ботулотоксины
                <ArrowLink />
              </button>
              <button className="flex h-[82px] w-full items-center justify-between rounded-full border border-[#DDDDDD] bg-[#E9E9E9] px-8 text-[28px] font-medium leading-[33px]">
                Биоревитализация
                <ArrowLink />
              </button>
              <button className="flex h-[82px] w-full items-center justify-between rounded-full border border-[#DDDDDD] bg-[#E9E9E9] px-8 text-[28px] font-medium leading-[33px]">
                Коллагенотерапия
                <ArrowLink />
              </button>
              <button className="flex h-[82px] w-full items-center justify-between rounded-full border border-[#DDDDDD] bg-[#E9E9E9] px-8 text-[28px] font-medium leading-[33px]">
                Мезотерапия
                <ArrowLink />
              </button>
              <button className="flex h-[82px] w-full items-center justify-between rounded-full border border-[#DDDDDD] bg-[#E9E9E9] px-8 text-[28px] font-medium leading-[33px]">
                Полимолочная кислота
                <ArrowLink />
              </button>
              <button className="flex h-[82px] w-full items-center justify-between rounded-full border border-[#DDDDDD] bg-[#E9E9E9] px-8 text-[28px] font-medium leading-[33px]">
                Контурная пластика
                <ArrowLink />
              </button>
            </div>
          </section>

          <div className="flex flex-col gap-[180px] pb-[218px]">
            {arr.map((el, idx) => {
              return <Direction key={idx} el={el} />;
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
};

export { ServiceItem };
