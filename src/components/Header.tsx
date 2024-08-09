import { Link } from "react-router-dom";
import { ArrowLeft } from "../shared/icons/ArrowLeft";
import { Logo } from "../shared/icons/Logo";

const Header = () => {
  return (
    <header className="container h-[100px] flex items-center justify-between">
      <div className="flex justify-between items-center px-[25px] w-full">
        <Link
          to={"/"}
          className="text-[#5A5A5A] font-medium flex gap-[13px] items-center py-[15px] pr-[37.5px] pl-[29.5px] bg-[#EBEBEB] rounded-[6px]"
        >
          <ArrowLeft />
          <p className="text-[24px] leading-[29px]">Все услуги</p>
        </Link>

        <Logo className="h-[51px] w-[182px]" />

        <p className="text-[28px] leading-[30px]">Косметология</p>
      </div>
    </header>
  );
};

export { Header };
