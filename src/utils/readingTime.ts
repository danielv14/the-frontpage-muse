export const calculateReadingTime = (text: string): number => {
  const wordsPerMinute = 230;
  const wordCount = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(wordCount / wordsPerMinute));
};
