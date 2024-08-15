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
        className="flex h-[44px] items-center justify-between rounded-full border border-[#DDDDDD] bg-[#E9E9E9] pl-[18px] pr-[22px]"
      >
        <p className="max-w-[256px] overflow-hidden text-ellipsis whitespace-nowrap text-[16px] font-medium leading-[20px]">
          {el.title}
        </p>

        <div className="flex-shrink-0">
          <ArrowLink className="h-[16px]" />
        </div>
      </button>
    );
  },
);

export { ButtonScroll };
