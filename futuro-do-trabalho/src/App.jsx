import { useMemo, useState } from "react";
import data from "./data/profissionais.json";
import Header from "./components/Header";
import ProfessionalCard from "./components/ProfessionalCard";
import ProfileModal from "./components/ProfileModal";
import useDarkMode from "./hooks/useDarkMode";
import { norm } from "./utils/text";

export default function App() {
  const { isDark, toggle } = useDarkMode();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const list = useMemo(() => {
    const q = norm(query);
    return (data || []).filter((p) => {
      if (!q) return true;
      const blob = [
        p.nome, p.cargo, p.resumo, p.area, p.localizacao,
        ...(p.habilidadesTecnicas || []),
        ...(p.softSkills || []),
      ].map(norm).join(" ");
      return blob.includes(q);
    });
  }, [query]);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-zinc-950 dark:text-zinc-50">
      <Header query={query} setQuery={setQuery} isDark={isDark} onToggleTheme={toggle} />

      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 text-sm text-zinc-600 dark:text-zinc-300">
          {list.length} profissionais encontrados
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProfessionalCard key={p.id} p={p} onOpen={setSelected} />
          ))}
        </div>
      </main>

      <ProfileModal open={!!selected} p={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
