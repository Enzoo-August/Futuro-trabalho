export default function Modal({ aberto, fechar, profissional }) {
  if (!aberto || !profissional) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 max-w-lg w-full shadow-2xl border dark:border-zinc-800 animate-fadeIn">
        <div className="flex items-center gap-4 border-b pb-4 dark:border-zinc-700">
          <img
            src={profissional.foto}
            alt={profissional.nome}
            className="h-16 w-16 rounded-full object-cover border border-gray-300 dark:border-zinc-700"
          />
          <div>
            <h2 className="text-xl font-semibold">{profissional.nome}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">{profissional.cargo}</p>
            <p className="text-xs text-gray-500 dark:text-gray-500">{profissional.area}</p>
          </div>
          <button
            onClick={fechar}
            className="ml-auto text-gray-500 hover:text-red-500 font-semibold"
          >
            ✕
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{profissional.resumo}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-xl hover:bg-blue-700 transition">
            Recomendar
          </button>
          <button className="border border-gray-300 dark:border-zinc-700 text-sm px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
            Enviar mensagem
          </button>
        </div>
      </div>
    </div>
  )
}
