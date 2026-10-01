export const displayFormat = (format: string): string => {
  const words = format.replace(/-/g, " ").toLowerCase();
  return words.charAt(0).toUpperCase() + words.slice(1);
};
