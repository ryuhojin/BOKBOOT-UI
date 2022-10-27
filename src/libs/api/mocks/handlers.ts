import { rest } from "msw";
import { mockWrite, mockRead } from "./resolvers/mockBokBoot";

export const handlers = [
  rest.post("/write", mockWrite),
  rest.post("/read", mockRead),
];
