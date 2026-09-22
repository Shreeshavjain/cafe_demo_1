import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    const offset = 80; // Height of the fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};
