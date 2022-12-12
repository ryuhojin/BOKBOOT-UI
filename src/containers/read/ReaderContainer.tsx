import { useEffect, useState } from "react";
import service from "@/libs/api";
import { useSearchParams } from "react-router-dom";
import MultiReadContainer from "./MultiReadContainer";
import SingleReadContainer from "./SingleReadContainer";
import { useRecoilState } from "recoil";
import { contentsState, contentState, languageState } from "@/libs/store/atom";

const ReaderContainer = () => {
  const [content, setContent] = useState("");
  const [language, setLanguage] = useState("");
  const [mode, setMode] = useState("single");
  const [searchParams] = useSearchParams();
  const [, setCont] = useRecoilState(contentState);
  const [, setLang] = useRecoilState(languageState);
  const [, setConts] = useRecoilState(contentsState);

  useEffect(() => {
    if (!searchParams.get("id") && !searchParams.get("key")) return;
    service
      .get(`/sourceCode/${searchParams.get("id")}`, {
        key: searchParams.get("key"),
      })
      .then((res) => {
        if (res.sourceCodes.length > 1) {
          const contents = res.sourceCodes.map((v: any) => v.source);
          const languages = res.sourceCodes.map((v: any) => v.language);
          setConts({
            contents: contents,
            languages: languages,
            index: 0,
          });
          setCont(res.sourceCodes[0].source);
          setLang(res.sourceCodes[0].language);
          setMode("multi");
        } else {
          setContent(res.sourceCodes[0].source);
          setLanguage(res.sourceCodes[0].language);
          setMode("single");
        }
      });
  }, [searchParams]);

  return mode == "multi" ? (
    <MultiReadContainer />
  ) : (
    <SingleReadContainer content={content} language={language} />
  );
};
export default ReaderContainer;
