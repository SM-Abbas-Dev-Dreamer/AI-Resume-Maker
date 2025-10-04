import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Tailwind classes ko intelligently merge karne ke liye helper
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}
