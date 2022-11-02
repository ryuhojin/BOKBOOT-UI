import { useCallback, useState } from "react";

const useContent = (defaultValue: string) => {
  const [content, setContent] = useState(defaultValue);

  const onChange = useCallback((content: string) => {
    setContent(content);
  }, []);

  const onReset = useCallback(() => {
    setContent("");
  }, []);

  return [content, onChange, onReset] as [
    string,
    typeof onChange,
    typeof onReset
  ];
};
export default useContent;
