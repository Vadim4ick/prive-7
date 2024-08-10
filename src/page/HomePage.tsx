import { CartService } from "../components/CartService";
import { Logo } from "../shared/icons/Logo";
import { GetServicesDocument, GetServicesQuery } from "@/graphql/__generated__";
import { useQuery } from "@apollo/client";

export interface ServiceItem {
  id: number | string;
  title: string;
  img: string;
  service: string[];
}

const HomePage = () => {
  const { loading, error, data } =
    useQuery<GetServicesQuery>(GetServicesDocument);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="min-h-screen bg-[#EDEDED] pb-[78px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-[60px] py-[60px]">
          <Logo />

          <h1 className="text-[60px] font-bold leading-[72px]">
            Выберите услугу
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-9 px-[6px]">
          {data &&
            data.services.map((item) => {
              return <CartService key={item.title} item={item} />;
            })}
        </div>
      </div>
    </main>
  );
};

export { HomePage };
