import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Modal = ({
  description,
  title,
  titleFont = "main",
}: {
  description: string;
  title: string;
  titleFont?: "second" | "main";
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = () => setIsOpen(!isOpen);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger className="h-fit self-end rounded-full bg-[#DEDEDE] px-[8px] py-[6px] text-[9px] font-medium leading-[10px]">
        Подробнее
      </DialogTrigger>

      <DialogContent className="p w-full max-w-[686px] items-center justify-center rounded-none border-none bg-transparent px-[24px]">
        <div className="flex w-full flex-col items-center justify-center gap-[20px] rounded-[8px] bg-white px-[28.6px] pb-[20px] pt-[24px]">
          <DialogTitle
            className={cn(
              "max-w-[440px] text-center text-[24px] font-semibold leading-[26px] text-[#111111]",
              {
                "second-family": titleFont === "second",
              },
            )}
          >
            {title}
          </DialogTitle>

          <DialogDescription className="w-full bg-[#F2F2F2] p-[16px] text-[16px] leading-[21px] text-[#444444]">
            {description}
          </DialogDescription>

          <button
            onClick={handleOpenChange}
            className="h-[40px] w-full max-w-[180px] bg-[#111111] text-[12.6px] font-medium leading-[15px] text-white"
          >
            Ясно, спасибо
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { Modal };
