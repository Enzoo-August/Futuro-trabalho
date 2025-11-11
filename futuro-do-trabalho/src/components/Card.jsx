export default function Card({ nome, cargo, resumo, foto, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1"
    >
      <div className="flex items-center gap-4">
        <img
          src={foto}
          alt={nome}
          className="h-16 w-16 rounded-full object-cover border border-gray-300 dark:border-zinc-700"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{nome}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{cargo}</p>
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 line-clamp-2">{resumo}</p>

      <div className="mt-3">
        <span className="inline-block bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300 text-xs font-medium px-3 py-1 rounded-full">
          Clique para ver mais
        </span>
      </div>
    </div>
  )
}
