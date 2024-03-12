import "./global.css";

import { createRoot } from "react-dom/client";
import { App } from "./app";
import { styleSheet } from "./css";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <>
      {/* biome-ignore lint/security:noDangerouslySetInnerHtml: trusted content */}
      <style dangerouslySetInnerHTML={{ __html: styleSheet() }} />
      <App />
    </>,
  );
}
