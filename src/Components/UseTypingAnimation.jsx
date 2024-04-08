import { useState, useEffect } from "react";

const useTypingAnimation = (targetWord) => {
  const [word, setWord] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let direction = 1; // 1 for forward, -1 for backward

    const interval = setInterval(() => {
      if (currentIndex === targetWord.length) {
        direction = -1;
      } else if (currentIndex === 0) {
        direction = 1;
      }

      setWord(targetWord.slice(0, currentIndex));
      
      if (direction === 1) {
        currentIndex++;
      } else {
        currentIndex--;
      }

    }, 300);

    return () => clearInterval(interval);
  }, [targetWord]);

  return word;
};

export default useTypingAnimation;
