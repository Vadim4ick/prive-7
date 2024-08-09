import { CartService } from "../components/CartService";
import { Logo } from "../shared/icons/Logo";

export interface ServiceItem {
  id: number | string;
  title: string;
  img: string;
  service: string[];
}

const arr: ServiceItem[] = [
  {
    id: 1,
    title: "Косметология",
    img: "1",
    service: ["чистка", "пилинг", "уход", "Margy’s", "массаж лица"],
  },
  {
    id: 2,
    title: "Макияж",
    img: "2",
    service: ["вечерний", "дневной", "праздничный"],
  },
  {
    id: 3,
    title: "Тело",
    img: "3",
    service: ["массаж", "уходы THALION", "уходы THALION", "прессотерапия"],
  },
  {
    id: 4,
    title: "Парикмахерский зал",
    img: "4",
    service: ["стилист", "топ-стилист", "уходы для волос", "окрашивание"],
  },
  {
    id: 5,
    title: "Ногтевой сервис",
    img: "5",
    service: ["стилист", "топ-стилист", "уходы для волос", "окрашивание"],
  },
  {
    id: 6,
    title: "Брови и ресницы",
    img: "6",
    service: ["Тридинг", "Коррекция воском", "Лазер"],
  },
  {
    id: 7,
    title: "Лазерная эпиляция",
    img: "7",
    service: ["Александритовый лазер", "Рубиновый лазер", "Диодный лазер"],
  },
  {
    id: 8,
    title: "Инъекционная и аппаратная косметология",
    img: "8",
    service: ["SMAS-лифтинг", "Термаж", "Ультразвуковая чистка"],
  },
];

const HomePage = () => {
  return (
    <main className="bg-[#EDEDED] min-h-screen pb-[78px]">
      <div className="container">
        <div className="flex flex-col gap-[60px] py-[60px] justify-center items-center">
          <Logo />

          <h1 className="text-[60px] leading-[72px] font-bold">
            Выберите услугу
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-9 px-[6px]">
          {arr.map((item) => {
            return <CartService key={item.title} item={item} />;
          })}
        </div>
      </div>
    </main>
  );
};

export { HomePage };
