import {  useLayoutEffect, useState } from "react";

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    function getDimensions() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    getDimensions();
    window.addEventListener("resize", getDimensions);

    return () => window.removeEventListener("resize", getDimensions);
  }, []);

  return dimensions;
};