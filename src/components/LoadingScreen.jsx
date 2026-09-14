import { useState } from "react";
import { useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Portfolio Loading />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <div
          className="mb-4 text-2xl sm:text-3xl md:text-4xl font-mono font-bold prompt-mark"
          role="status"
          aria-live="polite"
        >
          {text} <span className="animate-blink ml-1">|</span>
        </div>

        <div className="w-[200px] sm:w-[250px] md:w-[300px] h-[2px] bg-gray-800 relative overflow-hidden mx-auto">
          <div className="w-[40%] h-full bg-[var(--accent)] shadow-[0_0_15px_var(--accent)] animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
};
