import { useCallback, useEffect, useState } from "react";
import flourite from "flourite";

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
    const timer = setTimeout(
      () => setLanguage(flourite(content).language),
      2000
    );
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
