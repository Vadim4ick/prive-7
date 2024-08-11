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

// // Рекурсивная функция для извлечения всех заголовков и id
// const extractTitlesAndIds = (data, type = "mainTitle") => {
//   let result = [];

//   if (data.title && data.id) {
//     result.push({ id: data.id, title: data.title, type });
//   }

//   if (data.subDirections) {
//     data.subDirections.forEach((sub) => {
//       result = result.concat(
//         extractTitlesAndIds(sub.subDirections_id, "subTitle"),
//       );
//     });
//   }

//   return result;
// };

// Рекурсивная функция для извлечения всех заголовков
let counter = 1;
export const extractTitles = (data: any): { id: number; title: string }[] => {
  // let result = [] as { id: number; title: string };

  // if (data.title) {
  //   result.push({ id: counter++, title: data.title });
  // }

  // if (data.subDirections) {
  //   data.subDirections.forEach((sub) => {
  //     result = result.concat(extractTitles(sub.subDirections_id));
  //   });
  // }
  // Инициализация как массив
  let result: { id: number; title: string }[] = [];

  if (data.title) {
    result.push({ id: counter++, title: data.title });
  }

  if (data.subDirections) {
    data.subDirections.forEach((sub: any) => {
      result = result.concat(extractTitles(sub.subDirections_id));
    });
  }

  return result;
};
