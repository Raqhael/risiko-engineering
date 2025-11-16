function injectInto(root: ShadowRoot | Document) {
  try {
    const marker = "__slidev_scroll_fix_injected__";
    // @ts-ignore
    if ((root as any)[marker]) return;
    const css = `:host .mermaid, :host .class-diagram, :host .plantuml, :host pre.language-plantuml {
  max-height: calc(100vh - 6rem);
  overflow-y: auto;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  min-height: 0;
  min-width: 0;
}
:host svg {
  max-width:100%;
  width:auto !important;
  height:auto !important;
  display:block;
}`;
    const style = document.createElement("style");
    style.setAttribute("data-slidev-scroll-fix", "1");
    style.textContent = css;

    if (root instanceof ShadowRoot) {
      root.appendChild(style);
      // @ts-ignore
      root[marker] = true;
      return true;
    }

    // If root is Document, also install global fallback
    document.head.appendChild(style.cloneNode(true));
    // @ts-ignore
    (document as any)[marker] = true;
    return true;
  } catch (e) {
    // ignore
    return false;
  }
}

function scanAndInject(root: ParentNode = document) {
  // Inject into document
  injectInto(document);

  // Walk elements and inject into any open shadow roots
  const walker = document.createTreeWalker(
    root as unknown as Node,
    NodeFilter.SHOW_ELEMENT,
    null
  );
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const el = node as Element & { shadowRoot?: ShadowRoot };
    if (el.shadowRoot) injectInto(el.shadowRoot);
  }
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => scanAndInject());
  } else {
    scanAndInject();
  }

  const mo = new MutationObserver((muts) => {
    for (const m of muts) {
      for (const n of Array.from(m.addedNodes)) {
        if (n.nodeType === 1) {
          const el = n as Element & { shadowRoot?: ShadowRoot };
          if (el.shadowRoot) injectInto(el.shadowRoot);
          scanAndInject(el);
        }
      }
    }
  });
  mo.observe(document, { childList: true, subtree: true });
}

export {};
