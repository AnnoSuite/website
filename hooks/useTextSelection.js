import { useState, useEffect, useRef, useDebugValue } from "react";
import { getSelection } from "rangy";

export const useTextSelection = () => {
  const [[x, y, isVisible], setPosition] = useState([0, 0, false]);

  useEffect(() => {
    const handleMouseUp = e => {
      setTimeout(() => {
        const { nativeSelection } = getSelection();
        const { offsetTop, offsetLeft, offsetHeight } = e.target;
        setPosition([
          offsetLeft,
          offsetTop + offsetHeight - 10,
          !nativeSelection.isCollapsed
        ]);
      }, 10);
    };

    const handleFocusOut = () => {};
    document
      .getElementById("PAGE_CONTENT")
      .addEventListener("mouseup", handleMouseUp);
    document
      .getElementById("PAGE_CONTENT")
      .addEventListener("focusout", handleFocusOut);

    //clean up function
    return () => {
      try {
        document
          .getElementById("PAGE_CONTENT")
          .removeEventListener("mouseup", handleMouseUp);
        document
          .getElementById("PAGE_CONTENT")
          .removeEventListener("focusout", handleFocusOut);
      } catch (e) {
        console.log("welp memory leaks");
      }
    };
  }, []);
  return { state: [[x, y, isVisible], setPosition] };
};
