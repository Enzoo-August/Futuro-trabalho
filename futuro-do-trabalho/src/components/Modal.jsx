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

  const Badge = ({ children, className = "" }) => (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${className}`}>
      {children}
    </span>
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl border dark:border-zinc-800 text-gray-900 dark:text-gray-50">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-zinc-900 z-10 border-b border-gray-200 dark:border-zinc-700 p-4 flex items-center">
          <h2 className="text-xl font-bold flex-1">{profissional.nome}</h2>
          <button
            onClick={fechar}
            className="text-gray-500 hover:text-red-500 text-lg font-semibold"
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>

        {/* Conteúdo rolável */}
        <div className="p-6 space-y-5">
          {/* Foto + informações básicas */}
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
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {profissional.statusProfissional}
              </p>
            </div>
          </div>

          {/* Dados pessoais */}
          <div>
            <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Informações Pessoais
            </h3>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              <p><span className="font-semibold">Ano de nascimento:</span> {profissional.anoNascimento}</p>
              <p><span className="font-semibold">Idade:</span> {profissional.idade} anos</p>
              <p><span className="font-semibold">Cidade natal:</span> {profissional.nascimentoCidade}</p>
              <p><span className="font-semibold">Tempo de experiência:</span> {profissional.tempoExperiencia}</p>
              <p><span className="font-semibold">Status profissional:</span> {profissional.statusProfissional}</p>
            </div>
          </div>

          {/* Contatos */}
          <div>
            <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Contatos</h3>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              <p>📧 {profissional.contatos?.email}</p>
              <p>📱 {profissional.contatos?.telefone}</p>
              <p>💼 <a href={profissional.contatos?.linkedin} className="underline text-blue-600 dark:text-blue-400" target="_blank">LinkedIn</a></p>
              <p>💻 <a href={profissional.contatos?.github} className="underline text-blue-600 dark:text-blue-400" target="_blank">GitHub</a></p>
              <p>📸 <a href={profissional.contatos?.instagram} className="underline text-blue-600 dark:text-blue-400" target="_blank">Instagram</a></p>
            </div>
          </div>

          {/* Biografia */}
          <div>
            <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Biografia</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {profissional.biografia}
            </p>
          </div>

          {/* Hobbies */}
          {profissional.hobbies?.length > 0 && (
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Hobbies</h3>
              <div className="flex flex-wrap gap-2">
                {profissional.hobbies.map((h, i) => (
                  <Badge key={i} className="bg-gray-100 text-gray-800 dark:bg-zinc-800 dark:text-gray-200">{h}</Badge>
                ))}
              </div>
            </div>
          )}

          {/* Habilidades técnicas */}
          {profissional.habilidadesTecnicas?.length > 0 && (
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Habilidades Técnicas</h3>
              <div className="flex flex-wrap gap-2">
                {profissional.habilidadesTecnicas.map((skill, i) => (
                  <Badge key={i} className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">{skill}</Badge>
                ))}
              </div>
            </div>
          )}

          {/* Soft skills */}
          {profissional.softSkills?.length > 0 && (
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profissional.softSkills.map((s, i) => (
                  <Badge key={i} className="bg-gray-100 text-gray-800 dark:bg-zinc-800 dark:text-gray-200">{s}</Badge>
                ))}
              </div>
            </div>
          )}

          {/* Experiências */}
          {profissional.experiencias?.length > 0 && (
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Experiências</h3>
              {profissional.experiencias.map((exp, i) => (
                <div key={i} className="text-sm mb-2">
                  <p><strong>{exp.cargo}</strong> — {exp.empresa}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {exp.inicio} a {exp.fim || "atual"}
                  </p>
                  <p>{exp.descricao}</p>
                </div>
              ))}
            </div>
          )}

          {/* Formação */}
          {profissional.formacao?.length > 0 && (
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Formação</h3>
              {profissional.formacao.map((f, i) => (
                <p key={i} className="text-sm">🎓 {f.curso} — {f.instituicao} ({f.ano})</p>
              ))}
            </div>
          )}

          {/* Projetos */}
          {profissional.projetos?.length > 0 && (
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Projetos</h3>
              {profissional.projetos.map((p, i) => (
                <div key={i} className="text-sm">
                  <strong>{p.titulo}</strong>{" "}
                  {p.link && (
                    <a href={p.link} target="_blank" className="text-blue-600 dark:text-blue-400 underline">(link)</a>
                  )}
                  <p>{p.descricao}</p>
                </div>
              ))}
            </div>
          )}

          {/* Certificações */}
          {profissional.certificacoes?.length > 0 && (
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Certificações</h3>
              <ul className="list-disc pl-5 text-sm">
                {profissional.certificacoes.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
          )}

          {/* Idiomas */}
          {profissional.idiomas?.length > 0 && (
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Idiomas</h3>
              <div className="flex flex-wrap gap-2">
                {profissional.idiomas.map((lang, i) => (
                  <Badge key={i} className="bg-gray-100 text-gray-800 dark:bg-zinc-800 dark:text-gray-200">
                    {lang.idioma} ({lang.nivel})
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Áreas de interesse */}
          {profissional.areaInteresses?.length > 0 && (
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Áreas de Interesse</h3>
              <div className="flex flex-wrap gap-2">
                {profissional.areaInteresses.map((a, i) => (
                  <Badge key={i} className="bg-gray-100 text-gray-800 dark:bg-zinc-800 dark:text-gray-200">{a}</Badge>
                ))}
              </div>
            </div>
          )}

          {/* Botões de ação */}
          <div className="pt-4 flex flex-wrap gap-3 border-t border-gray-200 dark:border-zinc-700">
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
              className="border border-gray-300 dark:border-zinc-700 text-sm px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
            >
              {mostrarForm ? "Fechar formulário" : "Enviar mensagem"}
            </button>
          </div>

          {/* Formulário de mensagem */}
          {mostrarForm && (
            <div className="mt-4 border-t border-gray-200 dark:border-zinc-700 pt-3">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Enviar mensagem</h3>
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
                  placeholder={`Escreva sua mensagem para ${profissional.nome}...`}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-zinc-800 min-h-[90px]"
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
    </div>
  )
}
