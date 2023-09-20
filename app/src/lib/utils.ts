import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function sleep(ms = 500) {
  return new Promise((r) => setTimeout(r, ms))
}

export function titleCase(str: string): string {
  return str[0].toUpperCase() + str.substring(1)
}
