import { useEffect, useState } from "react"
import Card from "./components/Card"
import Modal from "./components/Modal"
import profissionaisData from "./data/profissionais.json"

export default function App() {
  const [profissionais, setProfissionais] = useState([])
  const [textoBusca, setTextoBusca] = useState("")
  const [filtroArea, setFiltroArea] = useState("")
  const [filtroStatus, setFiltroStatus] = useState("")
  const [filtroLocal, setFiltroLocal] = useState("")
  const [perfilAtual, setPerfilAtual] = useState(null)
  const [tema, setTema] = useState(localStorage.getItem("tema") || "light")

  useEffect(() => {
    setProfissionais(profissionaisData)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", tema === "dark")
    localStorage.setItem("tema", tema)
  }, [tema])

  const profissionaisFiltrados = profissionais.filter((p) => {
    const busca = textoBusca.toLowerCase()
    return (
      (!filtroArea || p.area === filtroArea) &&
      (!filtroStatus || p.statusProfissional === filtroStatus) &&
      (!filtroLocal || p.localizacao === filtroLocal) &&
      (p.nome.toLowerCase().includes(busca) ||
        p.cargo.toLowerCase().includes(busca) ||
        p.area.toLowerCase().includes(busca))
    )
  })

  const cidades = [...new Set(profissionais.map((p) => p.localizacao))].sort()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-50 transition-colors duration-300">
      <header className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gray-200 dark:border-zinc-800">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          🌐 Futuro do Trabalho
        </h1>

        <div className="flex flex-wrap items-center gap-3">
          <input
            type="text"
            placeholder="Buscar por nome, cargo ou área..."
            value={textoBusca}
            onChange={(e) => setTextoBusca(e.target.value)}
            className="border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm 
                       bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 
                       placeholder-gray-500 dark:placeholder-gray-300 
                       focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <select
            value={filtroArea}
            onChange={(e) => setFiltroArea(e.target.value)}
            className="border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm 
                       bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100"
          >
            <option value="">Todas as áreas</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Design">Design</option>
            <option value="Dados">Dados</option>
            <option value="Marketing">Marketing</option>
            <option value="Saúde">Saúde</option>
          </select>

          <select
            value={filtroLocal}
            onChange={(e) => setFiltroLocal(e.target.value)}
            className="border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm 
                       bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100"
          >
            <option value="">Todas as cidades</option>
            {cidades.map((cidade, i) => (
              <option key={i} value={cidade}>{cidade}</option>
            ))}
          </select>

          <select
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
            className="border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm 
                       bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100"
          >
            <option value="">Todos os status</option>
            <option value="Trabalhando na área">Trabalhando na área</option>
            <option value="Em busca de oportunidades">Em busca de oportunidades</option>
            <option value="Aberto a propostas">Aberto a propostas</option>
            <option value="Migrando de área">Migrando de área</option>
          </select>

          <button
            onClick={() => setTema(tema === "light" ? "dark" : "light")}
            className="ml-2 border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm 
                       hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
          >
            {tema === "light" ? "🌙 Escuro" : "☀️ Claro"}
          </button>
        </div>
      </header>

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
              onClick={() => setPerfilAtual(p)}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 dark:text-gray-400">
            Nenhum profissional encontrado.
          </p>
        )}
      </main>

      <Modal
        aberto={!!perfilAtual}
        fechar={() => setPerfilAtual(null)}
        profissional={perfilAtual}
      />

      <footer className="text-center p-4 border-t border-gray-200 dark:border-zinc-800 text-sm text-gray-600 dark:text-gray-400">
        Desenvolvido por Enzo Augusto — Global Solution | FIAP 2025
      </footer>
    </div>
  )
}
