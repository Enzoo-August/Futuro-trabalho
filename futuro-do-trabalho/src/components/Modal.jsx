import { useState } from "react"

export default function Modal({ aberto, fechar, profissional }) {
  const [recomendado, setRecomendado] = useState(false)
  const [mostrarForm, setMostrarForm] = useState(false)
  const [mensagem, setMensagem] = useState("")
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")

  if (!aberto || !profissional) return null

  const handleRecomendar = () => {
    setRecomendado(true)
    setTimeout(() => setRecomendado(false), 2500)
  }

  const handleEnviar = () => {
    if (!mensagem.trim()) {
      alert("⚠️ Escreva uma mensagem antes de enviar!")
      return
    }
    alert(
      `✅ Mensagem enviada para ${profissional.nome}!\n\nDe: ${
        nome || "Anônimo"
      }\nEmail: ${email || "não informado"}\n\n"${mensagem}"`
    )
    setMensagem("")
    setNome("")
    setEmail("")
    setMostrarForm(false)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4 overflow-y-auto">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 max-w-2xl w-full shadow-2xl border dark:border-zinc-800 animate-fadeIn text-gray-900 dark:text-gray-50">
        {/* Cabeçalho */}
        <div className="flex items-center gap-4 border-b pb-4 border-gray-200 dark:border-zinc-700">
          <img
            src={profissional.foto}
            alt={profissional.nome}
            className="h-20 w-20 rounded-full object-cover border border-gray-300 dark:border-zinc-700 shadow-sm"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
              {profissional.nome}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {profissional.cargo}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {profissional.area} • {profissional.localizacao}
            </p>
            {profissional.idade && (
              <p className="text-xs text-gray-500 dark:text-gray-400">
                🎂 {profissional.idade} anos ({profissional.anoNascimento}) • {profissional.tempoExperiencia}
              </p>
            )}
          </div>
          <button
            onClick={fechar}
            className="ml-auto text-gray-500 dark:text-gray-400 hover:text-red-500 font-semibold text-xl"
          >
            ✕
          </button>
        </div>

        {/* Contatos */}
        {profissional.contatos && (
          <div className="mt-3 text-sm text-gray-700 dark:text-gray-300 space-y-1">
            {profissional.contatos.email && <p>📧 {profissional.contatos.email}</p>}
            {profissional.contatos.telefone && <p>📱 {profissional.contatos.telefone}</p>}
            {profissional.contatos.linkedin && (
              <p>
                💼{" "}
                <a
                  href={profissional.contatos.linkedin}
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  LinkedIn
                </a>
              </p>
            )}
            {profissional.contatos.github && (
              <p>
                💻{" "}
                <a
                  href={profissional.contatos.github}
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  GitHub
                </a>
              </p>
            )}
            {profissional.contatos.instagram && (
              <p>
                📸{" "}
                <a
                  href={profissional.contatos.instagram}
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  Instagram
                </a>
              </p>
            )}
          </div>
        )}

        {/* Resumo */}
        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {profissional.resumo}
        </p>

        {/* Biografia */}
        {profissional.biografia && (
          <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic">
            {profissional.biografia}
          </p>
        )}

        {/* Habilidades */}
        {profissional.habilidadesTecnicas?.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold text-blue-600 dark:text-blue-400">
              Habilidades Técnicas
            </h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {profissional.habilidadesTecnicas.map((skill, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Experiências */}
        {profissional.experiencias?.length > 0 && (
          <div className="mt-5">
            <h3 className="font-semibold text-blue-600 dark:text-blue-400">Experiências</h3>
            <ul className="mt-2 space-y-2">
              {profissional.experiencias.map((exp, i) => (
                <li key={i} className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>{exp.cargo}</strong> — {exp.empresa} ({exp.inicio} a {exp.fim})
                  <br />
                  <span className="text-gray-600 dark:text-gray-400">{exp.descricao}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Botões */}
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={handleRecomendar}
            className={`text-sm px-4 py-2 rounded-xl transition ${
              recomendado
                ? "bg-green-500 text-white animate-pulse"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {recomendado ? "✅ Recomendado!" : "Recomendar"}
          </button>

          <button
            onClick={() => setMostrarForm(!mostrarForm)}
            className="border border-gray-300 dark:border-zinc-700 text-sm px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-800 transition text-gray-900 dark:text-gray-100"
          >
            {mostrarForm ? "Fechar formulário" : "Enviar mensagem"}
          </button>
        </div>

        {/* Formulário de mensagem */}
        {mostrarForm && (
          <div className="mt-5 border-t border-gray-200 dark:border-zinc-700 pt-4 animate-[fadeInDown_0.4s_ease-out]">
            <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Enviar mensagem
            </h3>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100"
              />
              <input
                type="email"
                placeholder="Seu e-mail (opcional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100"
              />
              <textarea
                placeholder={`Escreva sua mensagem para ${profissional.nome}...`}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 min-h-[80px]"
              />
              <button
                onClick={handleEnviar}
                className="mt-2 bg-blue-600 text-white text-sm px-4 py-2 rounded-xl hover:bg-blue-700 transition"
              >
                Enviar mensagem
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
