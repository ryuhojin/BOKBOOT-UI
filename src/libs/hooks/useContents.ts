import { Language, language } from "@codemirror/language";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { contentState, contentsState, languageState } from "../store/atom";
import detectorLng from "../utils/languageDetector";

const useContents = () => {
  // const [contents, setContents] = useState([""]);
  // const [nowLanguage, setNowLanguage] = useState("Unknown");
  // const [nowContent, setNowContent] = useState("");
  // const [index, setIndex] = useState(0);
  // const [languages, setLanguages] = useState(["Unknown"]);
  const [content, setContent] = useRecoilState(contentState);
  const [lanauge, setLanguage] = useRecoilState(languageState);
  const [contents, setContents] = useRecoilState(contentsState);

  const onChange = useCallback((content: string) => {
    let _contents = { ...contents };
    let _content = [..._contents.contents];
    _content[_contents.index] = content;
    _contents.contents = _content;
    setContent(content);
    setContents(_contents);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!content) return;
      let _contents = { ...contents };
      let _language = [..._contents.languages];
      let _detctLan = detectorLng(_contents.contents[_contents.index]).language;
      _language[_contents.index] = _detctLan;
      _contents.languages = _language;
      setLanguage(_detctLan);
      setContents(_contents);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [content]);

  const onPlus = useCallback(() => {
    let _contents = { ...contents };

    let _language = [..._contents.languages, "Unknown"];
    let _content = [..._contents.contents, ""];
    let _index = _contents.index + 1;

    _contents.languages = _language;
    _contents.contents = _content;
    _contents.index = _index;

    setContent("");
    setLanguage("Unknown");
    setContents(_contents);
  }, [contents]);

  const onDelete = useCallback(() => {
    let _contents = { ...contents };

    let _language = [..._contents.languages].splice(_contents.index, 1);
    let _content = [..._contents.contents].splice(_contents.index, 1);
    let _index = _contents.index - 1;

    _contents.languages = _language;
    _contents.contents = _content;
    _contents.index = _index;
debugger
    setContent(_contents.contents[_index]);
    setLanguage(_contents.languages[_index]);
    setContents(_contents);
  }, [contents]);

  // const nextPage = useCallback(() => {
  //   if (index > contents.length - 1) return;
  //   setNowContent(contents[index + 1]);
  //   setNowLanguage(languages[index + 1]);
  //   setIndex(index + 1);
  // }, []);

  // const prevPage = useCallback(() => {
  //   console.log("dd");
  //   if (index <= 0) return;
  //   setNowContent(contents[index - 1]);
  //   setNowLanguage(languages[index - 1]);
  //   setIndex(index - 1);
  // }, []);
  // const total = useMemo(() => contents.length, []);
  const index = useMemo(() => contents.index, [contents]);
  const total = useMemo(() => contents.contents.length, [contents]);
  const context = useMemo(() => content, [content]);
  const language = useMemo(() => lanauge, [lanauge]);
  return [
    context,
    language,
    index,
    total,
    onChange,
    onPlus,
    onDelete,
    // nowContent,
    // nowLanguage,
    // index,
    // total,
    // onChange,
    // onPlus,
    // onDelete,
    // nextPage,
    // prevPage,
  ] as [
    string,
    string,
    number,
    number,
    typeof onChange,
    typeof onPlus,
    typeof onDelete
    // string,
    // string,
    // number,
    // number,
    // typeof onChange,
    // typeof onPlus,
    // typeof onDelete,
    // typeof nextPage,
    // typeof prevPage];
  ];
};

export default useContents;
