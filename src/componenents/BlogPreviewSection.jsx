
import colors from "../constants/colors" // assure-toi que le chemin est correct

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
    <section
      className="py-12 px-4 md:px-8"
      style={{ backgroundColor: colors.ivory }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl font-bold mb-6"
          style={{ color: colors.dark }}
        >
          Nos derniers articles
        </h2>

        {/* Grid des articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {dummyArticles.map((article) => (
            <div
              key={article.id}
              className="rounded-lg shadow hover:shadow-md transition duration-300 overflow-hidden"
              style={{ backgroundColor: colors.olive }}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: colors.dark }}
                >
                  {article.title}
                </h3>
                <p
                  className="text-sm mb-1"
                  style={{ color: colors.mint }}
                >
                  {article.date}
                </p>
                <p
                  className="text-sm mb-4"
                  style={{ color: colors.dark }}
                >
                  {article.excerpt}
                </p>

                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center text-sm" style={{ color: "#facc15" }}>
                    {article.rating}
                  </div>
                </div>

                <a
                  href={`/articles/${article.id}`}
                  className="block text-center text-sm font-semibold py-2 px-4 rounded transition"
                  style={{
                    backgroundColor: colors.dark,
                    color: colors.light,
                  }}
                >
                  Plus d’infos
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton voir plus */}
        <div className="text-center mt-8">
          <a href="/articles">
            <button
              className="font-semibold py-2 px-6 rounded-lg transition"
              style={{
                backgroundColor: colors.dark,
                color: colors.light,
              }}
            >
              Voir plus d’articles 
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
