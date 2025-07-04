import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import colors from "../constants/colors";

export default function BlogPreviewSection() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/blogs")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.data.slice(0, 6));
      })
      .catch((err) => console.error("Erreur de chargement:", err));
  }, []);

  return (
    <section
      className="py-12 px-4 md:px-8"
      style={{ backgroundColor: colors.ivory }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6" style={{ color: colors.dark }}>
          Nos derniers articles
        </h2>

        {/* Grille des articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {articles.map((article) => (
            <div
              key={article._id}
              className="rounded-lg shadow hover:shadow-md transition duration-300 overflow-hidden"
              style={{ backgroundColor: colors.olive }}
            >
              <img
                src={`/uploads/blogs/${article.imageCover}`}
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
                <p className="text-sm mb-1" style={{ color: colors.mint }}>
                  {new Date(article.createdAt).toLocaleDateString("fr-FR")}
                </p>
                <p className="text-sm mb-4" style={{ color: colors.dark }}>
                  {article.description?.split(" ").slice(0, 20).join(" ")}...
                </p>

                <div className="flex justify-between items-center mb-3">
                  <div
                    className="flex items-center text-sm"
                    style={{ color: "#facc15" }}
                  >
                    <Star className="h-4 w-4 fill-yellow-400" />
                    4.5
                  </div>
                </div>

                {/* 🔄 Lien remplacé par navigation dynamique */}
                <button
                  onClick={() => navigate(`/blogs/${article._id}`)}
                  className="block w-full text-center text-sm font-semibold py-2 px-4 rounded transition"
                  style={{
                    backgroundColor: colors.dark,
                    color: colors.light,
                  }}
                >
                  Plus d’infos
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton voir plus */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/blogs")}
            className="font-semibold py-2 px-6 rounded-lg transition"
            style={{
              backgroundColor: colors.dark,
              color: colors.light,
            }}
          >
            Voir plus d’articles
          </button>
        </div>
      </div>
    </section>
  );
}
