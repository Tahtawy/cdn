// @vite-ignore
import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const location = useLocation();

  useEffect(() => {
    console.log("location 2", window.location);
  }, []);

  return (
    <>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        increment
      </button>
    </>
  );
};
