import { memo } from "react";
import { CartService } from "../components/CartService";
import { Logo } from "../shared/icons/Logo";
import { GetServicesDocument, GetServicesQuery } from "@/graphql/__generated__";
import { useQuery } from "@apollo/client";
import { Loader } from "@/components/ui/loader";

export interface ServiceItem {
  id: number | string;
  title: string;
  img: string;
  service: string[];
}

const HomePage = memo(() => {
  const { loading, error, data } =
    useQuery<GetServicesQuery>(GetServicesDocument);

  if (loading)
    return (
      <div className="z-50 h-screen w-full bg-white">
        <Loader className="absolute left-1/2 top-1/2 size-10" />
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="min-h-screen bg-[#EDEDED] pb-[48px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-[32px] py-[32px]">
          <Logo className="h-[32px]" />

          <h1 className="text-[32px] font-semibold leading-[38px]">
            Выберите услугу
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-[20px]">
          {data &&
            data.services.map((item) => {
              return <CartService key={item.title} item={item} />;
            })}
        </div>
      </div>
    </main>
  );
});

export { HomePage };
