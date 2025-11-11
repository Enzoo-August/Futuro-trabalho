import { useState } from "react"

export default function Modal({ aberto, fechar, profissional }) {
  const [recomendado, setRecomendado] = useState(false)
  const [mostrarForm, setMostrarForm] = useState(false)
  const [mensagem, setMensagem] = useState("")
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")

  if (!aberto || !profissional) return null

  const recomendar = () => {
    setRecomendado(true)
    setTimeout(() => setRecomendado(false), 2500)
  }

  const enviarMensagem = () => {
    if (!mensagem.trim()) {
      alert("Escreva uma mensagem antes de enviar.")
      return
    }
    alert(
      `Mensagem enviada para ${profissional.nome}!\n\nDe: ${nome || "Anônimo"}\nEmail: ${
        email || "não informado"
      }\n\n"${mensagem}"`
    )
    setMensagem("")
    setNome("")
    setEmail("")
    setMostrarForm(false)
  }

  const Etiqueta = ({ children, className }) => (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${className || ""}`}>
      {children}
    </span>
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl border dark:border-zinc-800 text-gray-900 dark:text-gray-50">
        <div className="sticky top-0 bg-white dark:bg-zinc-900 z-10 border-b border-gray-200 dark:border-zinc-700 p-4 flex items-center">
          <h2 className="text-xl font-semibold flex-1">{profissional.nome}</h2>
          <button
            onClick={fechar}
            className="text-gray-500 hover:text-red-500 text-lg font-semibold"
            title="Fechar"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div className="flex items-center gap-4">
            <img
              src={profissional.foto}
              alt={profissional.nome}
              className="h-24 w-24 rounded-full object-cover border border-gray-300 dark:border-zinc-700"
            />
            <div>
              <p className="font-semibold text-lg">{profissional.cargo}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {profissional.area} • {profissional.localizacao}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{profissional.statusProfissional}</p>
            </div>
          </div>

          <section>
            <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Informações Pessoais</h3>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              <p><strong>Ano de nascimento:</strong> {profissional.anoNascimento}</p>
              <p><strong>Idade:</strong> {profissional.idade} anos</p>
              <p><strong>Cidade natal:</strong> {profissional.nascimentoCidade}</p>
              <p><strong>Tempo de experiência:</strong> {profissional.tempoExperiencia}</p>
              <p><strong>Status profissional:</strong> {profissional.statusProfissional}</p>
            </div>
          </section>

          <section>
            <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Contatos</h3>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              <p>Email: {profissional.contatos?.email}</p>
              <p>Telefone: {profissional.contatos?.telefone}</p>
              <p><a href={profissional.contatos?.linkedin} target="_blank" className="underline text-blue-600 dark:text-blue-400">LinkedIn</a></p>
              <p><a href={profissional.contatos?.github} target="_blank" className="underline text-blue-600 dark:text-blue-400">GitHub</a></p>
              <p><a href={profissional.contatos?.instagram} target="_blank" className="underline text-blue-600 dark:text-blue-400">Instagram</a></p>
            </div>
          </section>

          {profissional.biografia && (
            <section>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Biografia</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {profissional.biografia}
              </p>
            </section>
          )}

          {profissional.habilidadesTecnicas?.length > 0 && (
            <section>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Habilidades Técnicas</h3>
              <div className="flex flex-wrap gap-2">
                {profissional.habilidadesTecnicas.map((item, i) => (
                  <Etiqueta key={i} className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                    {item}
                  </Etiqueta>
                ))}
              </div>
            </section>
          )}

          {profissional.softSkills?.length > 0 && (
            <section>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profissional.softSkills.map((s, i) => (
                  <Etiqueta key={i} className="bg-gray-100 text-gray-800 dark:bg-zinc-800 dark:text-gray-200">{s}</Etiqueta>
                ))}
              </div>
            </section>
          )}

          <div className="pt-4 flex flex-wrap gap-3 border-t border-gray-200 dark:border-zinc-700">
            <button
              onClick={recomendar}
              className={`text-sm px-4 py-2 rounded-xl transition ${
                recomendado
                  ? "bg-green-500 text-white animate-pulse"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {recomendado ? "Recomendado!" : "Indicar profissional"}
            </button>
            <button
              onClick={() => setMostrarForm(!mostrarForm)}
              className="border border-gray-300 dark:border-zinc-700 text-sm px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
            >
              {mostrarForm ? "Fechar formulário" : "Mandar mensagem"}
            </button>
          </div>

          {mostrarForm && (
            <div className="mt-4 border-t border-gray-200 dark:border-zinc-700 pt-3">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Mensagem</h3>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-zinc-800"
                />
                <input
                  type="email"
                  placeholder="Seu e-mail (opcional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-zinc-800"
                />
                <textarea
                  placeholder={`Mensagem para ${profissional.nome}...`}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-zinc-800 min-h-[90px]"
                />
                <button
                  onClick={enviarMensagem}
                  className="mt-2 bg-blue-600 text-white text-sm px-4 py-2 rounded-xl hover:bg-blue-700 transition"
                >
                  Enviar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
