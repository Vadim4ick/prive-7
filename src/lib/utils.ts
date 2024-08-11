import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("ru-RU").format(price);
};

export const discountPrice = (
  discount: number,
  price: number,
  format = true,
) => {
  if (format) {
    return formatPrice(Math.floor(price * (1 - discount / 100)));
  }

  return Math.floor(price * (1 - discount / 100));
};
