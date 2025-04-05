import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// This function is used to merge multiple class names together
// It is a wrapper around the clsx and tailwind-merge functions
