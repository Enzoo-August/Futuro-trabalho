import { useState } from "react"
import Card from "./components/Card"
import Modal from "./components/Modal"
import profissionais from "./data/profissionais.json"

export default function App() {
  const [selecionado, setSelecionado] = useState(null)
  const [busca, setBusca] = useState("")

  const filtrados = profissionais.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase()) ||
    p.cargo.toLowerCase().includes(busca.toLowerCase()) ||
    p.area.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-50 transition-colors duration-300">
      {/* HEADER */}
      <header className="border-b bg-white/70 dark:bg-zinc-900/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-6xl mx-auto p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h1 className="text-2xl font-bold text-blue-600">
            Futuro do Trabalho<span className="text-gray-900 dark:text-gray-50"> 🌐</span>
          </h1>
          <input
            type="text"
            placeholder="Buscar por nome, cargo ou área..."
            className="w-full sm:w-80 border border-gray-300 dark:border-zinc-700 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-800"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
      </header>

      {/* GRID */}
      <main className="max-w-6xl mx-auto p-6">
        {filtrados.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-10">
            Nenhum profissional encontrado 😕
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtrados.map((p) => (
              <Card
                key={p.id}
                nome={p.nome}
                cargo={p.cargo}
                resumo={p.resumo}
                foto={p.foto}
                onClick={() => setSelecionado(p)}
              />
            ))}
          </div>
        )}
      </main>

      {/* MODAL */}
      <Modal
        aberto={!!selecionado}
        fechar={() => setSelecionado(null)}
        profissional={selecionado}
      />

      {/* FOOTER */}
      <footer className="border-t text-center text-sm text-gray-600 dark:text-gray-400 py-4">
        Desenvolvido para a <strong>Global Solution – FIAP 2025</strong>
      </footer>
    </div>
  )
}
