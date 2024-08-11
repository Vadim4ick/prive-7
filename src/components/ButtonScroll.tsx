import { ArrowLink } from "@/shared/icons/ArrowLink";
import { memo } from "react";

const ButtonScroll = memo(
  ({
    el,
    onClick,
  }: {
    el: {
      title: string;
      id: string;
    };
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }) => {
    return (
      <button
        onClick={onClick}
        data-scroll={el.id}
        className="flex h-[82px] w-full items-center justify-between rounded-full border border-[#DDDDDD] bg-[#E9E9E9] px-8 text-[28px] font-medium leading-[33px]"
      >
        {el.title}

        <div className="flex-shrink-0">
          <ArrowLink />
        </div>
      </button>
    );
  },
);

export { ButtonScroll };
