"use client";

import Script from "next/script";

export default function ChatkitScript() {
  return (
    <Script
      src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
      strategy="beforeInteractive"
      onLoad={() => {
        console.info("[layout] chatkit.js loaded");
        window.dispatchEvent(new Event("chatkit-script-loaded"));
      }}
      onError={(e) => {
        console.error("[layout] chatkit.js failed to load", e);
        window.dispatchEvent(
          new CustomEvent("chatkit-script-error", {
            detail: "Failed to load chatkit.js from CDN",
          })
        );
      }}
    />
  );
}
