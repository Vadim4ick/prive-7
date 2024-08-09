import { useParams } from "react-router-dom";
import { Header } from "../components/Header";

const ServiceItem = () => {
  const { id } = useParams();

  return (
    <main className="bg-[#F4F4F4] min-h-screen">
      <Header />

      <section className="pt-[48px]">
        <div className="container">
          <h2 className="font-semibold text-[80px] leading-[88px] text-center second-family pb-[40px]">
            Косметология
          </h2>

          <div></div>
        </div>
      </section>
    </main>
  );
};

export { ServiceItem };
