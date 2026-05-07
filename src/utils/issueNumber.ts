export const issueNumberFor = (postDate: Date, allDates: Date[]): number => {
  const sorted = [...allDates].sort((a, b) => a.getTime() - b.getTime());
  const index = sorted.findIndex((d) => d.getTime() === postDate.getTime());
  return index >= 0 ? index + 1 : sorted.length;
};

export const formatRoman = (num: number): string => {
  const numerals: Array<[number, string]> = [
    [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
    [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
  ];
  let result = "";
  let remaining = num;
  for (const [value, sym] of numerals) {
    while (remaining >= value) {
      result += sym;
      remaining -= value;
    }
  }
  return result;
};
