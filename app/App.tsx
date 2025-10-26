"use client";

import { useCallback, useState } from "react";
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

  const [quickPrompt, setQuickPrompt] = useState<string | null>(null);

  const sendPrompt = (text: string) => setQuickPrompt(text);

  return (
    <main className="flex min-h-screen pb-[env(safe-area-inset-bottom)] bg-slate-100 dark:bg-slate-950">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm">
        <div className="flex items-center gap-3 p-4">
          <a
            href="https://cons-ia.org"
            title="Ir para a página inicial Cons-IA"
            aria-label="Ir para a página inicial Cons-IA"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-black via-slate-950 to-slate-900 text-white shadow-sm ring-1 ring-blue-400/20"
          >
            <img
              src="/favicon.png"
              alt="Cons-IA"
              className="h-6 w-6"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                if (img.src.endsWith('/favicon.png')) {
                  img.src = '/favicon.ico';
                }
              }}
            />
          </a>
          <span className="text-lg font-semibold tracking-wide text-slate-900 dark:text-slate-100">
            ConsAGENT
          </span>
        </div>
        <div className="px-4">
          <hr className="my-3 border-slate-200 dark:border-slate-800" />
        </div>
        <nav className="flex flex-col gap-3 p-4">
          <button
            onClick={() => sendPrompt("Sou iniciante na Conscienciologia")}
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-100 bg-cyan-100 hover:bg-cyan-200 dark:bg-cyan-900/40 dark:hover:bg-cyan-900/60 transition-colors"
          >
            Sou Iniciante
          </button>
          <button
            onClick={() => sendPrompt("Liste os documentos que você possui na base de dados vetorial")}
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-100 bg-rose-100 hover:bg-rose-200 dark:bg-rose-900/40 dark:hover:bg-rose-900/60 transition-colors"
          >
            Lista Fontes
          </button>
          <button
            onClick={() => sendPrompt("busca em arquivos")}
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-100 bg-amber-100 hover:bg-amber-200 dark:bg-amber-900/40 dark:hover:bg-amber-900/60 transition-colors"
          >
            Busca Termo
          </button>
          <button
            onClick={() => sendPrompt("analise verbete")}
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-100 bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-900/40 dark:hover:bg-emerald-900/60 transition-colors"
          >
            Analisa Texto
          </button>
          <button
            onClick={() => sendPrompt("escreve verbete")}
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-100 bg-sky-100 hover:bg-sky-200 dark:bg-sky-900/40 dark:hover:bg-sky-900/60 transition-colors"
          >
            Escreve Texto
          </button>
          <button
            onClick={() => sendPrompt("Defina um termo")}
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-100 bg-yellow-100 hover:bg-yellow-200 dark:bg-yellow-900/40 dark:hover:bg-yellow-900/60 transition-colors"
          >
            Cria Definologia
          </button>
        </nav>
        <div className="px-4">
          <hr className="my-2 border-slate-200 dark:border-slate-800" />
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1">
        <div className="mx-auto w-full max-w-5xl p-4">
          <ChatKitPanel
            theme={scheme}
            onWidgetAction={handleWidgetAction}
            onResponseEnd={handleResponseEnd}
            onThemeRequest={setScheme}
            quickPrompt={quickPrompt}
            onQuickPromptConsumed={() => setQuickPrompt(null)}
          />
        </div>
      </div>
    </main>
  );
}
