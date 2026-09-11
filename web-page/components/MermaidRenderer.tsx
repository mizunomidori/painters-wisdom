"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

type MermaidRendererProps = {
  html: string;
};

export default function MermaidRenderer({ html }: MermaidRendererProps) {
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;
    const article = articleRef.current;

    if (!article) {
      return;
    }

    const diagramBlocks = Array.from(
      article.querySelectorAll<HTMLElement>("pre > code.language-mermaid"),
    );

    if (diagramBlocks.length === 0) {
      return;
    }

    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "dark",
      themeVariables: {
        darkMode: true,
        background: "#151819",
        primaryColor: "#2a211b",
        primaryTextColor: "#f4efe6",
        secondaryTextColor: "#f4efe6",
        tertiaryTextColor: "#f4efe6",
        textColor: "#f4efe6",
        primaryBorderColor: "#d89a68",
        lineColor: "#d89a68",
        secondaryColor: "#1c2020",
        tertiaryColor: "#202525",
        sectionBkgColor: "#2a211b",
        altSectionBkgColor: "#202525",
        titleColor: "#f4efe6",
        fontSize: "18px",
      },
    });

    const renderDiagrams = async () => {
      await Promise.all(
        diagramBlocks.map(async (codeBlock, index) => {
          const pre = codeBlock.parentElement;
          const source = codeBlock.textContent?.trim();

          if (!pre || !source) {
            return;
          }

          try {
            const { svg } = await mermaid.render(
              `mermaid-diagram-${Date.now()}-${index}`,
              source,
            );

            if (cancelled) {
              return;
            }

            const diagram = document.createElement("div");
            const diagramType = source.startsWith("timeline") ? "timeline" : "flowchart";
            diagram.className = `mermaid-diagram mermaid-${diagramType}`;
            diagram.setAttribute("role", "img");
            diagram.setAttribute("aria-label", "Mermaid diagram");
            diagram.innerHTML = svg;
            pre.replaceWith(diagram);
          } catch (error) {
            console.error("Unable to render Mermaid diagram", error);
          }
        }),
      );
    };

    void renderDiagrams();

    return () => {
      cancelled = true;
    };
  }, [html]);

  return (
    <article
      ref={articleRef}
      className="article-content prose prose-lg max-w-none prose-invert"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
