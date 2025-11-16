import { defineMermaidSetup } from "@slidev/types";

export default defineMermaidSetup(() => {
  return {
    startOnLoad: true,
    securityLevel: "loose",
    classDiagram: {
      htmlLabels: true,
      diagramPadding: 0,
      nodeSpacing: 10,
    },
    sequence: {
      diagramMarginX: 50,
      diagramMarginY: 50,
      actorMargin: 50,
      noteMargin: 10,
      bottomMarginAdj: 400,
    },
  };
});
