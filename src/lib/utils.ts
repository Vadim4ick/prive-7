/* eslint-disable @typescript-eslint/no-explicit-any */
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

export const pathImage = (id: string) => {
  return `${import.meta.env.VITE_SERVER_URL}/assets/${id}`;
};

// let counter = 1;
// export const extractTitles = (data: any): { id: number; title: string }[] => {
//   const result: { id: number; title: string }[] = [];

//   if (data.title) {
//     result.push({ id: counter++, title: data.title });
//   }

//   // if (data.subDirections) {
//   //   data.subDirections.forEach((sub: any) => {
//   //     result = result.concat(extractTitles(sub.subDirections_id));
//   //   });
//   // }

//   return result;
// };

// export const extractTitles = (data: any): { id: number; title: string }[] => {
//   // Declare the counter variable outside of the function scope
//   let counter = 1;

//   const result: { id: number; title: string }[] = [];

//   if (data.title) {
//     result.push({ id: counter++, title: data.title });
//   }

//   return result;
// };
