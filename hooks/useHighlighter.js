import { useEffect } from 'react'

const rangy = require("rangy/lib/rangy-core");
require("rangy/lib/rangy-classapplier");
require("rangy/lib/rangy-highlighter");

export const useHighlighter = (ref) => {
  useEffect(() => {
    rangy.init();

    let highlighter = rangy.createHighlighter();

    highlighter.addClassApplier(
      rangy.createClassApplier("highlight", {
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

    function highlightSelectedText() {
      highlighter.highlightSelection("highlight");
    }
    function noteSelectedText() {
      highlighter.highlightSelection("note");
    }
    () => 
  });
};
