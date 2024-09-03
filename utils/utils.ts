import { clsx, ClassArray } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassArray): string {
  return twMerge(clsx(classes));
}
