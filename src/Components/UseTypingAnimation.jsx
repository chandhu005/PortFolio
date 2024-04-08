import { useState, useEffect } from "react";

const useTypingAnimation = (targetWord) => {
  const [word, setWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex <= targetWord.length) {
        setWord(targetWord.slice(0, currentIndex));
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [targetWord, currentIndex]);

  return word;
};

export default useTypingAnimation;
