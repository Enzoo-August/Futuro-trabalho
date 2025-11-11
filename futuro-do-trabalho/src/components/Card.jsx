export default function Card({ nome, cargo, resumo, foto, statusProfissional, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 dark:hover:border-blue-400"
    >
      {/* Foto e informações principais */}
      <div className="flex flex-col items-center text-center">
        <img
          src={foto}
          alt={nome}
          className="h-20 w-20 rounded-full object-cover border border-gray-300 dark:border-zinc-700 mb-3"
        />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{nome}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">{cargo}</p>

        {statusProfissional && (
          <p className="text-sm mt-1 text-gray-700 dark:text-gray-300 italic font-bold">
            {statusProfissional}
          </p>
        )}
      </div>

      {/* Resumo */}
      <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 text-center line-clamp-3">
        {resumo}
      </p>

      {/* Botão “ver mais” */}
      <div className="mt-5 text-center">
        <span className="inline-block text-blue-600 dark:text-blue-400 text-xs font-medium border border-blue-100 dark:border-blue-900/40 px-3 py-1 rounded-full">
          Ver mais detalhes
        </span>
      </div>
    </div>
  )
}
