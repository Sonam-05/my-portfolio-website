import { useState, useEffect } from "react";

export default function useTyping(words = [], speed = 120, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (index >= words.length) {
      setIndex(0);
      return;
    }

    if (!reverse && subIndex <= words[index].length) {
      const timeout = setTimeout(() => setSubIndex((s) => s + 1), speed);
      return () => clearTimeout(timeout);
    }

    if (reverse && subIndex >= 0) {
      const timeout = setTimeout(() => setSubIndex((s) => s - 1), speed);
      return () => clearTimeout(timeout);
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), pause);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((i) => (i + 1) % words.length);
    }
  }, [subIndex, index, reverse, words, speed, pause]);

  const text = words.length
    ? words[index].substring(0, Math.max(0, subIndex))
    : "";

  return { text, blink };
}
