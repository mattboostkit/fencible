/**
 * Format phone number for tel: links
 */
export function formatPhoneForLink(phone: string): string {
  return phone.replace(/\s/g, "");
}

/**
 * Generate slug from string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/**
 * Capitalise first letter
 */
export function capitalise(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Format area name from slug
 */
export function formatAreaName(slug: string): string {
  return slug
    .split("-")
    .map((word) => capitalise(word))
    .join(" ");
}
