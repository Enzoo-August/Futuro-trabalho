import { useState } from "react";

export default function ProfileModal({ open, onClose, p }) {
  const [showMsg, setShowMsg] = useState(false);
  const [msg, setMsg] = useState("");

  if (!open || !p) return null;

  const recomendar = async () => {
    const texto = `Recomendo ${p.nome} (${p.cargo}) – área: ${p.area} – skills: ${(p.habilidadesTecnicas||[]).join(", ")}`;
    if (navigator.share) {
      try { await navigator.share({ title: "Recomendação", text: texto }); return; } catch {}
    }
    try {
      await navigator.clipboard.writeText(texto);
      alert("Recomendação copiada para a área de transferência!");
    } catch {
      alert(texto);
    }
  };

  const enviarMensagem = () => {
    if (!msg.trim()) return alert("Escreva uma mensagem.");
    const key = `mensagens:${p.id}`;
    const arr = JSON.parse(localStorage.getItem(key) || "[]");
    arr.push({ msg, at: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(arr));
    setMsg("");
    setShowMsg(false);
    alert("Mensagem enviada (simulado/localStorage)!");
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute left-1/2 top-1/2 w-[min(750px,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border bg-white p-5 shadow-xl dark:bg-zinc-900 dark:border-zinc-800">
        <div className="flex items-start gap-4">
          {p.foto ? (
            <img src={p.foto} alt={p.nome} className="h-20 w-20 rounded-full object-cover" />
          ) : (
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-white text-2xl font-bold">
              {(p.nome || "?").slice(0,1)}
            </div>
          )}
          <div className="min-w-0">
            <h2 className="text-xl font-bold">{p.nome}</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">{p.cargo} • {p.localizacao}</p>
            <p className="mt-2 text-sm">{p.resumo}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {(p.habilidadesTecnicas||[]).map((t) => (
                <span key={t} className="rounded-full border px-2 py-0.5 text-[11px] dark:border-zinc-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <button onClick={onClose} className="ml-auto rounded-lg border px-2 py-1 text-sm dark:border-zinc-700">Fechar</button>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Section title="Experiências">
            <ul className="space-y-1 text-sm">
              {(p.experiencias||[]).map((e, i) => (
                <li key={i} className="leading-snug">
                  <strong>{e.cargo}</strong> — {e.empresa} ({e.inicio} → {e.fim})<br/>{e.descricao}
                </li>
              ))}
            </ul>
          </Section>
          <Section title="Formação">
            <ul className="space-y-1 text-sm">
              {(p.formacao||[]).map((f, i) => (
                <li key={i}>{f.curso} — {f.instituicao} ({f.ano})</li>
              ))}
            </ul>
          </Section>
          <Section title="Projetos">
            <ul className="space-y-1 text-sm">
              {(p.projetos||[]).map((proj, i) => (
                <li key={i}><a className="underline" href={proj.link} target="_blank" rel="noreferrer">{proj.titulo}</a> — {proj.descricao}</li>
              ))}
            </ul>
          </Section>
          <Section title="Outros">
            <p className="text-sm">
              <strong>Certificações:</strong> {(p.certificacoes||[]).join(", ") || "—"}<br/>
              <strong>Idiomas:</strong> {(p.idiomas||[]).map(x => `${x.idioma} (${x.nivel})`).join(", ") || "—"}<br/>
              <strong>Interesses:</strong> {(p.areaInteresses||[]).join(", ") || "—"}
            </p>
          </Section>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button onClick={recomendar} className="rounded-xl bg-blue-600 px-4 py-2 text-white">Recomendar profissional</button>
          <button onClick={() => setShowMsg((v)=>!v)} className="rounded-xl border px-4 py-2 dark:border-zinc-700">Enviar mensagem</button>
        </div>

        {showMsg && (
          <div className="mt-3 rounded-xl border p-3 dark:border-zinc-700">
            <textarea
              className="h-24 w-full resize-none rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:border-zinc-700"
              placeholder={`Mensagem para ${p.nome}... (simulado)`}
              value={msg}
              onChange={(e)=>setMsg(e.target.value)}
            />
            <div className="mt-2 flex justify-end">
              <button onClick={enviarMensagem} className="rounded-lg bg-blue-600 px-3 py-2 text-white text-sm">Enviar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h3 className="mb-1 text-sm font-semibold text-zinc-700 dark:text-zinc-300">{title}</h3>
      <div className="rounded-xl border p-3 text-zinc-800 dark:text-zinc-200 dark:border-zinc-700">{children}</div>
    </section>
  );
}
