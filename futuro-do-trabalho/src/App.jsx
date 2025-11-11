import { useState } from "react"
import Card from "./components/Card"
import Modal from "./components/Modal"
import profissionais from "./data/profissionais.json"

export default function App() {
  const [selecionado, setSelecionado] = useState(null)
  const [busca, setBusca] = useState("")
  const [tema, setTema] = useState(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  )

  const [filtroArea, setFiltroArea] = useState("")
  const [filtroCidade, setFiltroCidade] = useState("")
  const [filtroTech, setFiltroTech] = useState("")

  // Alternar tema
  const alternarTema = () => {
    const novo = tema === "light" ? "dark" : "light"
    setTema(novo)
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(novo)
    localStorage.setItem("tema", novo)
  }

  // Filtro combinado: busca + área + cidade + tecnologia
  const filtrados = profissionais.filter((p) => {
    const texto = busca.toLowerCase()
    const matchBusca =
      p.nome.toLowerCase().includes(texto) ||
      p.cargo.toLowerCase().includes(texto) ||
      p.area.toLowerCase().includes(texto)

    const matchArea = filtroArea ? p.area === filtroArea : true
    const matchCidade = filtroCidade ? p.localizacao === filtroCidade : true
    const matchTech = filtroTech
      ? p.habilidadesTecnicas?.includes(filtroTech)
      : true

    return matchBusca && matchArea && matchCidade && matchTech
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-50 transition-colors duration-300">
      {/* HEADER */}
      <header className="border-b bg-white/70 dark:bg-zinc-900/80 backdrop-blur sticky top-0 z-10 text-gray-900 dark:text-gray-50">
        <div className="max-w-6xl mx-auto p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Futuro do Trabalho<span className="text-gray-900 dark:text-gray-50"> 🌐</span>
          </h1>

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Buscar por nome, cargo ou área..."
              className="w-full sm:w-80 border border-gray-300 dark:border-zinc-700 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            <button
              onClick={alternarTema}
              className="border rounded-xl px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 dark:border-zinc-700 text-gray-900 dark:text-gray-50 transition"
              title="Alternar tema"
            >
              {tema === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>

        {/* FILTROS */}
        <div className="max-w-6xl mx-auto px-4 pb-3 flex flex-wrap gap-2">
          <select
            onChange={(e) => setFiltroArea(e.target.value)}
            className="border dark:border-zinc-700 rounded-lg px-3 py-1.5 bg-white dark:bg-zinc-800 text-sm text-gray-900 dark:text-gray-100"
          >
            <option value="">Todas as áreas</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Design">Design</option>
            <option value="Dados">Dados</option>
            <option value="Marketing">Marketing</option>
            <option value="Saúde">Saúde</option>
          </select>

          <select
            onChange={(e) => setFiltroCidade(e.target.value)}
            className="border dark:border-zinc-700 rounded-lg px-3 py-1.5 bg-white dark:bg-zinc-800 text-sm text-gray-900 dark:text-gray-100"
          >
            <option value="">Todas as cidades</option>
            <option value="São Paulo/SP">São Paulo/SP</option>
            <option value="Curitiba/PR">Curitiba/PR</option>
            <option value="Belo Horizonte/MG">Belo Horizonte/MG</option>
            <option value="Rio de Janeiro/RJ">Rio de Janeiro/RJ</option>
            <option value="Campinas/SP">Campinas/SP</option>
          </select>

          <select
            onChange={(e) => setFiltroTech(e.target.value)}
            className="border dark:border-zinc-700 rounded-lg px-3 py-1.5 bg-white dark:bg-zinc-800 text-sm text-gray-900 dark:text-gray-100"
          >
            <option value="">Todas as tecnologias</option>
            <option value="React">React</option>
            <option value="Node.js">Node.js</option>
            <option value="Python">Python</option>
            <option value="SQL">SQL</option>
            <option value="Figma">Figma</option>
          </select>
        </div>
      </header>

      {/* GRID DE CARDS */}
      <main className="max-w-6xl mx-auto p-6 text-gray-900 dark:text-gray-50">
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
