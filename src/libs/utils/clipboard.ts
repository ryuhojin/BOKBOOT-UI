const clipboard = (contents: string, resultMessage: string) => {
  let message = "";
  if (document.queryCommandSupported("copy")) {
    message = "Do not Supported Copy";
  }
  const textarea = document.createElement("textarea");
  textarea.value = contents;
  textarea.style.top = "0";
  textarea.style.left = "0";
  textarea.style.position = "fixed";

  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  message = resultMessage;
  return message;
};

export default clipboard;
