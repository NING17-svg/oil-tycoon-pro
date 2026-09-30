import React from "react";

type RichBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "unordered"; items: string[] }
  | { type: "ordered"; items: string[] };

function parseBlocks(body: string): RichBlock[] {
  const blocks: RichBlock[] = [];
  const lines = body.replace(/\r\n/g, "\n").split("\n");
  let paragraph: string[] = [];
  let listType: "unordered" | "ordered" | null = null;
  let listItems: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push({ type: "paragraph", text: paragraph.join(" ").trim() });
    paragraph = [];
  };

  const flushList = () => {
    if (!listType || !listItems.length) return;
    blocks.push({ type: listType, items: listItems });
    listType = null;
    listItems = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", text: line.slice(4).trim() });
      continue;
    }

    const unordered = line.match(/^[-*]\s+(.+)$/);
    if (unordered) {
      flushParagraph();
      if (listType && listType !== "unordered") flushList();
      listType = "unordered";
      listItems.push(unordered[1]);
      continue;
    }

    const ordered = line.match(/^\d+\.\s+(.+)$/);
    if (ordered) {
      flushParagraph();
      if (listType && listType !== "ordered") flushList();
      listType = "ordered";
      listItems.push(ordered[1]);
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  return blocks;
}

export function RichText({ body }: { body: string }) {
  const blocks = parseBlocks(body);

  return (
    <div className="rich-text">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return <h3 key={`heading-${index}`}>{block.text}</h3>;
        }

        if (block.type === "unordered") {
          return (
            <ul key={`ul-${index}`}>
              {block.items.map((item, itemIndex) => (
                <li key={`${itemIndex}-${item}`}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "ordered") {
          return (
            <ol key={`ol-${index}`}>
              {block.items.map((item, itemIndex) => (
                <li key={`${itemIndex}-${item}`}>{item}</li>
              ))}
            </ol>
          );
        }

        return <p key={`paragraph-${index}`}>{block.text}</p>;
      })}
    </div>
  );
}
