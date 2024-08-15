import { Link } from "react-router-dom";
import { ArrowLeft } from "../shared/icons/ArrowLeft";
import { Logo } from "../shared/icons/Logo";
import { memo } from "react";

const Header = memo(({ title }: { title: string | undefined }) => {
  return (
    <header className="fixed z-50 w-full bg-[#F4F4F4]">
      <div className="headerLine container fixed flex h-[var(--header-height)] items-center justify-between">
        <div className="flex w-full items-center justify-between px-[12px]">
          <Link
            to={"/"}
            className="flex items-center gap-[7px] rounded-[3.5px] bg-[#EBEBEB] py-[8px] pl-[17px] pr-[22px] font-medium text-[#5A5A5A]"
          >
            <ArrowLeft className="h-[8.5px]" />
            <p className="text-[13.5px] leading-[16.5px]">Все услуги</p>
          </Link>

          <Logo className="h-[30px]" />

          <p className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap text-[16px] leading-[20px]">
            {title}
          </p>
        </div>
      </div>
    </header>
  );
});

export { Header };
