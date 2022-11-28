import { useCallback, useEffect, useState } from "react";
import detectorLng from "@/libs/utils/languageDetector";

const useContent = (defaultValue: string) => {
  const [content, setContent] = useState(defaultValue);
  const [language, setLanguage] = useState("Unknown");

  const onChange = useCallback((content: string) => {
    setContent(content);
  }, []);

  const onReset = useCallback(() => {
    setContent("");
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!content) return;
      setLanguage(detectorLng(content).language);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [content]);

  return [content, language, onChange, onReset] as [
    string,
    string,
    typeof onChange,
    typeof onReset
  ];
};
export default useContent;
