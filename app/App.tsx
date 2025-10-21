"use client";

import { useCallback } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function App() {
  const { scheme, setScheme } = useColorScheme();

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-end bg-slate-100 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-5xl">
        {/* Botão Home acima do container do chatbot */}
        <div className="mb-3 flex justify-start">
          <a
            href="https://cons-ia.org"
            title="Ir para a página inicial Cons-IA"
            aria-label="Ir para a página inicial Cons-IA"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-black via-slate-950 to-slate-900 text-white shadow-sm ring-1 ring-blue-400/20 transition-all hover:ring-blue-500/30 hover:shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/30 dark:from-black dark:via-slate-950 dark:to-slate-900 dark:ring-blue-500/20 dark:hover:ring-blue-500/30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M11.47 3.84a.75.75 0 0 1 1.06 0l8 8a.75.75 0 1 1-1.06 1.06l-.47-.47V19.5A2.25 2.25 0 0 1 16.75 21h-2.5a.75.75 0 0 1-.75-.75v-3a1.5 1.5 0 0 0-3 0v3a.75.75 0 0 1-.75.75h-2.5A2.25 2.25 0 0 1 4 19.5v-7.07l-.47.47a.75.75 0 1 1-1.06-1.06l8-8Z" />
            </svg>
          </a>
        </div>
        <ChatKitPanel
          theme={scheme}
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
          onThemeRequest={setScheme}
        />
      </div>
    </main>
  );
}
