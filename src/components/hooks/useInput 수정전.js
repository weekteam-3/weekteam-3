import React, { useState } from "react";

export const useInput = () => {
  const [inputs, setInputs] = useState("");

  const handler = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return [inputs, handler];
};

export default useInput;
