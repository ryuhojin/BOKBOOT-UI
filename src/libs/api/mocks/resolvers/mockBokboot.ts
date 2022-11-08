import {
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
} from "msw";

interface CodeProps {
  sourceCode: string;
}

interface KeyProps {
  key: string;
}

const mockWrite = async (
  req: RestRequest<CodeProps, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext
) => {
  const { sourceCode } = req.body;
  console.log(sourceCode);
  if (!sourceCode)
    return res(
      ctx.status(500),
      ctx.json({ message: "Please, Enter the code." })
    );

  return res(
    ctx.status(200),
    ctx.json({ id: 1, key: 1, message: "Code copy was succesful." })
  );
};

const mockRead = async (
  req: RestRequest<KeyProps, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext
) => {
  const key = req.url.searchParams.get("key");
  if (!key)
    return res(
      ctx.status(500),
      ctx.json({ message: "Please, Enter Code Id." })
    );
  return res(
    ctx.status(200),
    ctx.json({
      sourceCode: 'var a = 1; console.log("hi");',
      language: "Javascript",
      message: "Code load was successful",
    })
  );
};

export { mockWrite, mockRead };
