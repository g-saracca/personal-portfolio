import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Utility that merges class names and removes duplicates
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
