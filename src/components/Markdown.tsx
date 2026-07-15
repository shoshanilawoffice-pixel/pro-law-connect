import ReactMarkdown from "react-markdown";

/**
 * רינדור טקסט עשיר (Markdown) שמגיע מפאנל הניהול — הדגשות, רשימות וקישורים,
 * בסגנון האתר. עוטפים ב-div כדי שמחלקות ריווח (space-y) יחולו על הפסקאות.
 */
const Markdown = ({ children, className }: { children: string; className?: string }) => (
  <div className={className}>
    <ReactMarkdown
      components={{
        a: ({ node, href, ...props }) => (
          <a
            href={href}
            className="text-accent font-semibold hover:underline"
            {...(href?.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            {...props}
          />
        ),
        ul: ({ node, ...props }) => <ul className="list-disc pr-6 space-y-1" {...props} />,
        ol: ({ node, ...props }) => <ol className="list-decimal pr-6 space-y-1" {...props} />,
        h2: ({ node, ...props }) => (
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-lg font-bold text-foreground mt-6 mb-2" {...props} />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  </div>
);

export default Markdown;
