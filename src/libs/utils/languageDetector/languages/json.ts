import type { LanguagePattern } from "../Types";

export const JSON: LanguagePattern[] = [
  // object declaration on top
  { pattern: /^\{$/, type: "meta.module", nearTop: true },
  // normal data type
  { pattern: /^\s*".+":\s*(".+"|[0-9]+|null|true|false)(,)?$/, type: "keyword" },
  // object and array
  { pattern: /^\s*".+":\s*(\{|\[)$/, type: "keyword" },
  // inline key/value pair in object
  // e.g { "id": 1, "body": "some comment", "postId": 1 }
  { pattern: /^\s*".+":\s*\{(\s*".+":\s*(".+"|[0-9]+|null|true|false)(,)?\s*){1,}\}(,)?$/, type: "keyword" },
  // inline value in array
  // e.g "middlewares": ["./fixtures/middlewares/en", "./fixtures/middlewares/jp"]
  { pattern: /\s*".+"\s*\[\s*((".+"|[0-9]+|null|true|false)(,)?\s*){1,}\](,)?$/, type: "keyword" }
];
