import React, { useState, useEffect } from "react";

const TextChange = () => {
  const [currenText, setcurrenText] = useState("");
  const [isForward, setisForward] = useState(true);
  const [endval, setendval] = useState(0);
  const [Index, setIndex] = useState(0);

  const texts = [" Abhishek Kene"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setcurrenText(texts[Index].substring(0, endval));
      if (isForward) {
        setendval((prev) => prev + 1);
      } else {
        setendval((prev) => prev - 1);
      }

      if (endval > texts[Index].length + 10) {
        setisForward(false);
      } else if (endval < 0) {
        setisForward(true);
        setIndex((prev) => (prev + 1) %  texts.length);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [endval, isForward, Index, texts]);

  return <div className="transition ease duration-300">{currenText}</div>;
};

export default TextChange;