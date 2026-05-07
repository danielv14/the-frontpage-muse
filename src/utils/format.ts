const FORMAT_TAG_MAP: Record<string, string> = {
  poem: "POEM",
  poetry: "POEM",
  verse: "POEM",
  limerick: "LIMERICK",
  haiku: "HAIKU",
  satire: "SATIRE",
  essay: "ESSAY",
  letters: "LETTERS",
  letter: "LETTERS",
  obituaries: "OBITUARY",
  obituary: "OBITUARY",
  classifieds: "CLASSIFIEDS",
  transcript: "TRANSCRIPT",
  dialogue: "DIALOGUE",
  "courtroom-drama": "DRAMA",
  drama: "DRAMA",
  "short-story": "STORY",
  story: "STORY",
  fiction: "STORY",
  "nature-documentary": "FIELD NOTES",
  "field-notes": "FIELD NOTES",
  meditation: "MEDITATION",
  meta: "META",
  introduction: "META",
};

export const inferFormat = (
  explicit: string | undefined,
  tags: string[] | undefined,
): string => {
  if (explicit) return explicit.toUpperCase();
  if (tags) {
    for (const tag of tags) {
      const mapped = FORMAT_TAG_MAP[tag.toLowerCase()];
      if (mapped) return mapped;
    }
  }
  return "DISPATCH";
};
