"use client";

interface MarqueeDividerProps {
  items?: string[];
  speedSeconds?: number;
  reverse?: boolean;
}

export default function MarqueeDivider({
  items = [
    "DISTRIBUTED SYSTEMS",
    "CAUSAL AI REASONING",
    "HIGH-THROUGHPUT ENGINES",
    "TREE-SITTER AST PARSING",
    "GEOSPATIAL ROUTING",
    "QUANTITATIVE SIMULATION",
    "DETERMINISTIC VERIFICATION",
    "POSTGRESQL + PGVECTOR",
  ],
  speedSeconds = 30,
  reverse = false,
}: MarqueeDividerProps) {
  // Duplicate array 3 times to ensure seamless infinite looping
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-hairline)",
        borderBottom: "1px solid var(--border-hairline)",
        padding: "16px 0",
        userSelect: "none",
      }}
      data-cursor-text="Engineering"
    >
      <div
        className="marquee-track"
        style={{
          animationDuration: `${speedSeconds}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {repeatedItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "24px",
              paddingRight: "24px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "var(--text-dim)",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                transition: "color var(--duration-micro) var(--ease-micro)",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-amber)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-dim)")}
            >
              {item}
            </span>
            <span
              style={{
                color: "var(--accent-amber)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.9rem",
                opacity: 0.7,
              }}
            >
              /
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
