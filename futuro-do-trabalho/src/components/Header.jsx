export default function Header({ query, setQuery, isDark, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur dark:bg-zinc-900/80">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
        <div className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">FT</span>
          <span>Futuro do Trabalho</span>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nome, cargo, skill..."
            className="w-64 rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100"
          />
          <button
            onClick={onToggleTheme}
            className="rounded-xl border px-3 py-2 text-sm dark:bg-zinc-800 dark:border-zinc-700"
            title="Alternar tema"
          >
            {isDark ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </header>
  );
}
