import { Link } from "react-router-dom";
import { ArrowLeft } from "../shared/icons/ArrowLeft";
import { Logo } from "../shared/icons/Logo";
import { memo } from "react";

const Header = memo(({ title }: { title: string | undefined }) => {
  return (
    <header className="fixed z-50 w-full bg-[#F4F4F4]">
      <div className="headerLine container fixed flex h-[var(--header-height)] items-center justify-between">
        <div className="flex w-full items-center justify-between px-[25px]">
          <Link
            to={"/"}
            className="flex items-center gap-[13px] rounded-[6px] bg-[#EBEBEB] py-[15px] pl-[29.5px] pr-[37.5px] font-medium text-[#5A5A5A]"
          >
            <ArrowLeft />
            <p className="text-[24px] leading-[29px]">Все услуги</p>
          </Link>

          <Logo className="h-[51px] w-[182px]" />

          <p className="text-[28px] leading-[30px]">{title}</p>
        </div>
      </div>
    </header>
  );
});

export { Header };
