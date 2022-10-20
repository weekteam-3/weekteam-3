import React, { useState } from "react";

export const useInput = () => {
  const [inputs, setInputs] = useState("");

  // name받을 필요 없음. 간단하게 value만 받기
  const handler = (e) => {
    const inputValue = e.target.value;
    setInputs(inputValue);
  };

  return [inputs, handler, setInputs];
};

export default useInput;
