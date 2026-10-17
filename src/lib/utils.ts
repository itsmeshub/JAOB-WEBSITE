import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Used to tell apart internal React routes (e.g. "/about") from external links
// (e.g. the Laravel apply/login pages) so components know whether to render a
// react-router <Link> or a plain <a> tag.
export function isExternalUrl(href: string) {
  return /^https?:\/\//i.test(href);
}
