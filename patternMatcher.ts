import { match, select } from "ts-pattern";

type Data = { type: "text"; content: string } | { type: "img"; src: string };

type Result = { type: "ok"; data: Data } | { type: "error"; error: Error };

const result: Result = {
  type: "ok",
  data: { type: "text", content: "content" },
};
type RetType = ReturnType<typeof test>;

const test = (result: Result) => {
  return match(result)
    .with({ type: "error" }, (res) => `<p>Oups! An error occured</p>`)
    .with(
      { type: "ok", data: { type: "text" } },
      (res) => `<p>${res.data.content}</p>`
    )
    .with(
      { type: "ok", data: { type: "img", src: select() } },
      (src) => `<img src=${src} />`
    )
    .exhaustive();
};

const test1 = (result: Result): RetType => {
  return match(result)
    .with({ type: "error" }, (res) => `<p>Oups! An error occured</p>`)
    .with(
      { type: "ok", data: { type: "text" } },
      (res) => `<p>${res.data.content}</p>`
    )
    .with(
      { type: "ok", data: { type: "img", src: select() } },
      (src) => `<img src=${src} />`
    )
    .exhaustive();
};

console.log(test1(result));
