import { Star } from "lucide-react"

const dummyArticles = [
  {
    id: "1",
    title: "Marrakech",
    image: "/image/mara.webp",
    date: "25 Juin 2025",
    excerpt: "Découvrez les souks, la médina et les palais secrets de Marrakech dans un itinéraire express.",
    rating: "4.8",
  },
  {
    id: "2",
    title: "Agadir",
    image: "/image/agadir.webp",
    date: "12 Mai 2025",
    excerpt: "Soleil toute l’année, plages dorées et ambiance détendue : Agadir est la destination idéale pour se ressourcer.",
    rating: "4.6",
  },
  {
    id: "3",
    title: "Tanger",
    image: "/image/tanger.webp",
    date: "12 Mai 2023",
    excerpt: "Tanger séduit par son énergie cosmopolite, sa médina perchée sur les hauteurs et ses couchers de soleil.",
    rating: "4.6",
  },
  {
    id: "4",
    title: "Taroudant",
    image: "/image/taroudnat.webp",
    date: "12 juillet 2022",
    excerpt: "Surnommée la petite Marrakech, Taroudant charme par ses remparts ocres et son ambiance authentique.",
    rating: "4.6",
  },
  {
    id: "5",
    title: "Rabat",
    image: "/image/rabat.webp",
    date: "12 Mai 2020",
    excerpt: "Rabat allie histoire, modernité et calme océanique. Une escapade culturelle et relaxante.",
    rating: "4",
  },
  {
    id: "6",
    title: "Meknès",
    image: "/image/meknes.webp",
    date: "30 Mai 2025",
    excerpt: "Plongez au cœur de Meknès, l’ancienne cité impériale pleine de charme et d’histoire.",
    rating: "4.7",
  },
]

export default function BlogPreviewSection() {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Nos derniers articles</h2>

        {/* Grid des articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {dummyArticles.map((article) => (
            <div
              key={article.id}
              className="rounded-lg shadow hover:shadow-md transition duration-300 bg-white overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p className="text-sm text-gray-500">{article.date}</p>
                <p className="text-sm text-gray-700 mt-2 mb-4">{article.excerpt}</p>

                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center text-yellow-500 text-sm">
                    <Star className="h-4 w-4 fill-yellow-400" />
                    {article.rating}
                  </div>
                </div>

                {/* ➕ Nouveau bouton pour plus d'infos */}
                <a
                  href={`/articles/${article.id}`}
                  className="block text-center bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  Plus d’infos
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton général "Voir plus d’articles" */}
        <div className="text-center mt-8">
          <a href="/articles">
            <button
              className="bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-900"
            >
              Voir plus d’articles
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
