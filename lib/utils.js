import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function currentDate() {
  return new Date().toISOString().split("T")[0]
}

export function getTimeRange(start, end) {
  const startHour = start.getHours().toString().padStart(2, '0');
  const endHour = end.getHours().toString().padStart(2, '0');
  const startMinutes = start.getMinutes().toString().padStart(2, '0');
  const endMinutes = end.getMinutes().toString().padStart(2, '0');
  const startTime = `${startHour}:${startMinutes}`;
  const endTime = `${endHour}:${endMinutes}`;
  return `${startTime} - ${endTime}`;
}