import { useCallback, useEffect, useMemo, useState } from "react";
import detectorLng from "../utils/languageDetector";

const useContents = () => {
  const [contents, setContents] = useState([""]);
  const [nowLanguage, setNowLanguage] = useState("Unknown");
  const [nowContent, setNowContent] = useState("");
  const [index, setIndex] = useState(0);
  const [languages, setLanguages] = useState(["Unknown"]);

  const onChange = useCallback((content: string) => {
    let _content = contents;
    _content[index] = content;
    setContents(_content);
    setNowContent(content);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      let _language = detectorLng(nowContent).language;
      let _languages = languages;
      _languages[index] = _language;
      setNowLanguage(_language);
      setLanguages(_languages);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [nowContent]);

  const onPlus = useCallback(() => {
    setNowContent("");
    setNowLanguage("Unknown");
    setContents([...contents, ""]);
    setLanguages([...languages, "Unknown"]);
    setIndex(index + 1);
  }, []);

  const onDelete = useCallback(() => {
    setNowContent(contents[index - 1]);
    setNowLanguage(languages[index - 1]);
    setContents(contents.splice(index, 1));
    setLanguages(languages.splice(index, 1));
    setIndex(index - 1);
  }, []);

  const nextPage = useCallback(() => {
    if (index > contents.length - 1) return;
    setNowContent(contents[index + 1]);
    setNowLanguage(languages[index + 1]);
    setIndex(index + 1);
  }, []);

  const prevPage = useCallback(() => {
    if (index <= 0) return;
    setNowContent(contents[index - 1]);
    setNowLanguage(languages[index - 1]);
    setIndex(index - 1);
  }, []);
  
  const total = useMemo(() => contents.length, [contents]);

  return [
    nowContent,
    nowLanguage,
    index,
    total,
    onChange,
    onPlus,
    onDelete,
    nextPage,
    prevPage,
  ] as [
    string,
    string,
    number,
    number,
    typeof onChange,
    typeof onPlus,
    typeof onDelete,
    typeof nextPage,
    typeof prevPage
  ];
};

export default useContents;
