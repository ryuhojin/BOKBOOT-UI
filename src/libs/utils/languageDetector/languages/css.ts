import type { LanguagePattern } from "../Types";

export const CSS: LanguagePattern[] = [
  // Properties
  { pattern: /[a-z-]+:(?!:).+;/, type: "keyword" },
  // <style> tag from HTML
  { pattern: /<(\/)?style>/, type: "not" }
];
