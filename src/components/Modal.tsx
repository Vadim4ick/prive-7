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
      <DialogTrigger className="h-fit self-end rounded-full bg-[#DEDEDE] px-[14px] py-[10px] font-medium">
        Подробнее
      </DialogTrigger>

      <DialogContent className="p w-full max-w-[1200px] items-center justify-center rounded-none border-none bg-transparent px-[44px]">
        <div className="flex w-full flex-col items-center justify-center gap-[36px] rounded-[8px] bg-white px-[48px] pb-[36px] pt-[48px]">
          <DialogTitle
            className={cn(
              "max-w-[768px] text-center text-[48px] font-semibold leading-[52px] text-[#111111]",
              {
                "second-family": titleFont === "second",
              },
            )}
          >
            {title}
          </DialogTitle>

          <DialogDescription className="w-full bg-[#F2F2F2] p-[28px] text-[28px] leading-[36px] text-[#444444]">
            {description}
          </DialogDescription>

          <button
            onClick={handleOpenChange}
            className="h-[72px] w-full max-w-[320px] bg-[#111111] text-[22px] font-medium text-white"
          >
            Ясно, спасибо
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { Modal };
