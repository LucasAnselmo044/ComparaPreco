import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      {/* Cabeçalho */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Comparador de Preços de Jogos
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Encontre os melhores preços para seus jogos favoritos na Steam, Xbox Live e PSN.
        </p>
      </header>

      {/* Campo de Pesquisa e Botão */}
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Digite o nome do jogo..."
            className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <button
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Buscar Preços
          </button>
        </div>
      </div>

      {/* Resultados */}
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Resultados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Steam */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/steam-logo.png" // Adicione uma imagem da Steam na pasta public
                alt="Steam Logo"
                width={40}
                height={40}
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Steam
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Preço: R$ 199,90</p>
          </div>

          {/* Xbox Live */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/xbox-logo.png" // Adicione uma imagem da Xbox Live na pasta public
                alt="Xbox Live Logo"
                width={40}
                height={40}
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Xbox Live
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Preço: R$ 219,90</p>
          </div>

          {/* PSN */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/psn-logo.png" // Adicione uma imagem da PSN na pasta public
                alt="PSN Logo"
                width={40}
                height={40}
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                PSN
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Preço: R$ 209,90</p>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="text-center mt-12 text-gray-600 dark:text-gray-300">
        <p>
          Teste
          <a
            href="https://github.com/LucasAnselmo044"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Dev
          </a>
        </p>
      </footer>
    </div>
  );
}