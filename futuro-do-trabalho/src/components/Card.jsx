export default function Card({ nome, cargo, resumo, foto, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-2xl border border-gray-200 dark:border-zinc-800 
                 bg-gradient-to-b from-white to-blue-50 dark:from-zinc-900 dark:to-zinc-950 
                 p-5 shadow-sm hover:shadow-xl transition-transform hover:-translate-y-1 group"
    >
      <div className="flex items-center gap-4">
        <img
          src={foto}
          alt={nome}
          className="h-16 w-16 rounded-full object-cover border border-gray-300 dark:border-zinc-700 shadow-sm"
        />
        <div>
          <h2
            className="text-lg font-semibold text-gray-900 dark:text-gray-50 
                       group-hover:text-blue-600 dark:group-hover:text-blue-400 
                       transition-colors duration-300"
          >
            {nome}
          </h2>
          <p
            className="text-sm text-gray-700 dark:text-gray-400 
                       group-hover:text-blue-500 dark:group-hover:text-blue-300 
                       transition-colors duration-300"
          >
            {cargo}
          </p>
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 line-clamp-2 leading-relaxed">
        {resumo}
      </p>

      <div className="mt-3">
        <span
          className="inline-block bg-blue-100 text-blue-700 
                     dark:bg-blue-900/40 dark:text-blue-300 
                     text-xs font-medium px-3 py-1 rounded-full 
                     group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 
                     transition-colors duration-300 shadow-sm"
        >
          Clique para ver mais
        </span>
      </div>
    </div>
  )
}
