import React, {useRef} from "react";

export default function UseRef() {
  const inputRef = useRef(null);

  const focusTextInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={focusTextInput}>点击我让input组件获得焦点</button>
    </>
  );
}