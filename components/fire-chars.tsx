"use client";

import { useEffect, useRef } from 'react'

export function FireChars() {
  const preRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    const charsPerLine = Math.floor(window.innerWidth);
    const height = 20;
    const fireChars = " ,;+ltgti!lI?/\\|)(1}{][rcvzjftJUOQocxfXhqwWB8&%$#@";
    const maxCharIndex = fireChars.length;

    const firePixelsArray = new Array(charsPerLine * height + 1).fill(0);
    const preNode = preRef.current;

    let animationFrameId: number;

    function generateFire() {
      let fireString = "";

      for (let i = 0; i < charsPerLine; i++) {
        const randomCol = Math.floor(Math.random() * charsPerLine);
        const index = randomCol + charsPerLine * (height - 1);
        firePixelsArray[index] = Math.floor(Math.random() * maxCharIndex);
      }

      for (let i = 0; i < charsPerLine; i++) {
        const randomCol = Math.floor(Math.random() * charsPerLine);
        const index = randomCol + charsPerLine * (height - 1);
        firePixelsArray[index] = 0;
      }

      for (let i = 0; i < charsPerLine * (height - 1); i++) {
        const averageValue =
          (firePixelsArray[i] +
            firePixelsArray[i + 1] +
            firePixelsArray[i + charsPerLine] +
            firePixelsArray[i + charsPerLine + 1]) / 4;

        firePixelsArray[i] = Math.floor(averageValue);
        const char = fireChars[firePixelsArray[i]] || ' ';

        fireString += char;

        if (i % charsPerLine === 0) fireString += "<br>";
      }

      if (preNode) {
        preNode.innerHTML = fireString;
      }

      animationFrameId = requestAnimationFrame(generateFire);
    }

    generateFire();

    return () => {
      cancelAnimationFrame(animationFrameId);
    }
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <pre
        ref={preRef}
        className="opacity-80 m-0 p-0 text-[10px] leading-[1.5] select-none"
      ></pre>
    </div>
  )
}
