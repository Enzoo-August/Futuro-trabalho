function Initials({ name }) {
  const [first = "", second = ""] = (name || "").split(" ");
  const initials = `${first[0] || ""}${second[0] || ""}`.toUpperCase();
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-lg font-bold">
      {initials || "?"}
    </div>
  );
}

export default function ProfessionalCard({ p, onOpen }) {
  return (
    <button
      onClick={() => onOpen(p)}
      className="group w-full rounded-2xl border bg-white p-4 text-left shadow-sm transition hover:shadow-md dark:bg-zinc-900 dark:border-zinc-800"
    >
      <div className="flex items-center gap-4">
        {p.foto ? (
          <img src={p.foto} alt={p.nome} className="h-16 w-16 rounded-full object-cover" />
        ) : (
          <Initials name={p.nome} />
        )}
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold">{p.nome}</h3>
          <p className="truncate text-sm text-zinc-600 dark:text-zinc-300">{p.cargo}</p>
          <div className="mt-2 flex flex-wrap gap-1">
            {(p.habilidadesTecnicas || []).slice(0, 3).map((t) => (
              <span key={t} className="rounded-full border px-2 py-0.5 text-[11px] dark:border-zinc-700">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}
