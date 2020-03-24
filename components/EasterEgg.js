import React from "react";
import { Toolbar, HighlightColor } from "./Toolbar";
import { useTextSelection } from "../hooks/useTextSelection";

const rangy = require("rangy/lib/rangy-core");
require("rangy/lib/rangy-classapplier");
require("rangy/lib/rangy-highlighter");

export const EasterEgg = () => {
  const {
    state: [[x, y, isVisible], setPosition]
  } = useTextSelection();
  const handleClick = color => {
    rangy.init();

    let highlighter = rangy.createHighlighter();

    highlighter.addClassApplier(
      rangy.createClassApplier(`highlight-${color}`, {
        ignoreWhiteSpace: true,
        tagNames: ["span", "a"]
      })
    );
    highlighter.addClassApplier(
      rangy.createClassApplier("note", {
        ignoreWhiteSpace: true,
        elementTagName: "a",
        elementProperties: {
          href: "#",
          onclick: function() {
            var highlight = highlighter.getHighlightForElement(this);
            if (window.confirm("Delete this note (ID " + highlight.id + ")?")) {
              highlighter.removeHighlights([highlight]);
            }
            return false;
          }
        }
      })
    );

    function highlightSelectedText(color) {
      return highlighter.highlightSelection(`highlight-${color}`);
    }
    setPosition([0, 0, false]);
    highlightSelectedText(color);
    // function noteSelectedText() {
    //   highlighter.highlightSelection("note");
    // }
  };
  return (
    isVisible && (
      <Toolbar
        style={{
          transform: `translate(${x}px, ${y}px)`
        }}
      >
        <HighlightColor
          title="Highlight Yellow"
          onClick={() => handleClick("yellow")}
        />
        <HighlightColor
          color="#ff5555"
          title="Highlight Red"
          onClick={() => handleClick("red")}
        />
        <HighlightColor
          color="#55ff66"
          title="Highlight Green"
          onClick={() => handleClick("green")}
        />
        <HighlightColor
          color="#55b5ff"
          title="Highlight Blue"
          onClick={() => handleClick("blue")}
        />
      </Toolbar>
    )
  );
};
