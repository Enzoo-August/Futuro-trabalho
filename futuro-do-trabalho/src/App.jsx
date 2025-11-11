import { useEffect, useState } from "react"
import Card from "./components/Card"
import Modal from "./components/Modal"
import profissionaisData from "./data/profissionais.json"

export default function App() {
  const [profissionais, setProfissionais] = useState([])
  const [busca, setBusca] = useState("")
  const [filtroArea, setFiltroArea] = useState("")
  const [filtroStatus, setFiltroStatus] = useState("")
  const [selecionado, setSelecionado] = useState(null)
  const [tema, setTema] = useState(localStorage.getItem("tema") || "light")

  useEffect(() => {
    setProfissionais(profissionaisData)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", tema === "dark")
    localStorage.setItem("tema", tema)
  }, [tema])

  const profissionaisFiltrados = profissionais.filter((p) =>
    (!filtroArea || p.area === filtroArea) &&
    (!filtroStatus || p.statusProfissional === filtroStatus) &&
    (p.nome.toLowerCase().includes(busca.toLowerCase()) ||
      p.cargo.toLowerCase().includes(busca.toLowerCase()) ||
      p.area.toLowerCase().includes(busca.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-50 transition-colors duration-300">
      <header className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gray-200 dark:border-zinc-800">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          🌐 Futuro do Trabalho
        </h1>

        <div className="flex flex-wrap items-center gap-3">
          {/* Campo de busca */}
          <input
            type="text"
            placeholder="Buscar por nome, cargo ou área..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500"
          />

          {/* Filtro por área */}
          <select
            value={filtroArea}
            onChange={(e) => setFiltroArea(e.target.value)}
            className="border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-zinc-900"
          >
            <option value="">Todas as áreas</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Design">Design</option>
            <option value="Dados">Dados</option>
            <option value="Marketing">Marketing</option>
            <option value="Saúde">Saúde</option>
          </select>

          {/* Filtro por status profissional */}
          <select
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
            className="border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-zinc-900"
          >
            <option value="">Todos os status</option>
            <option value="Trabalhando na área">Trabalhando na área</option>
            <option value="Em busca de oportunidades">Em busca de oportunidades</option>
            <option value="Aberto a propostas">Aberto a propostas</option>
            <option value="Migrando de área">Migrando de área</option>
          </select>

          {/* Botão de alternar tema */}
          <button
            onClick={() => setTema(tema === "light" ? "dark" : "light")}
            className="ml-2 border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
          >
            {tema === "light" ? "🌙 Modo Escuro" : "☀️ Modo Claro"}
          </button>
        </div>
      </header>

      {/* Lista de profissionais */}
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {profissionaisFiltrados.length > 0 ? (
          profissionaisFiltrados.map((p) => (
            <Card
              key={p.id}
              nome={p.nome}
              cargo={p.cargo}
              resumo={p.resumo}
              foto={p.foto}
              statusProfissional={p.statusProfissional}
              onClick={() => setSelecionado(p)}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 dark:text-gray-400">
            Nenhum profissional encontrado 😕
          </p>
        )}
      </main>

      {/* Modal de detalhes */}
      <Modal aberto={!!selecionado} fechar={() => setSelecionado(null)} profissional={selecionado} />

      <footer className="text-center p-4 border-t border-gray-200 dark:border-zinc-800 text-sm text-gray-600 dark:text-gray-400">
        Desenvolvido por Enzo Augusto e equipe — Global Solution FIAP 2025
      </footer>
    </div>
  )
}
