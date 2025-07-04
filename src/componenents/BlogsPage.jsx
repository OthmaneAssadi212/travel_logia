import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import colors from "../constants/colors";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/blogs")
      .then(res => res.json())
      .then(data => {
        setBlogs(data.data);
      })
      .catch(err => console.error("Erreur chargement blogs:", err));
  }, []);

  return (
    <div className="py-12 px-4 md:px-8" style={{ backgroundColor: colors.ivory }}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8" style={{ color: colors.dark }}>
          Tous les articles
        </h1>

        {blogs.length === 0 ? (
          <p style={{ color: colors.dark }}>Aucun article trouvé.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((article) => (
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
                  <h3 className="text-lg font-semibold" style={{ color: colors.dark }}>
                    {article.title}
                  </h3>
                  <p className="text-sm" style={{ color: colors.mint }}>
                    {new Date(article.createdAt).toLocaleDateString("fr-FR")}
                  </p>
                  <p className="text-sm mb-3" style={{ color: colors.dark }}>
                    {article.description?.slice(0, 120)}...
                  </p>

                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center text-sm" style={{ color: "#facc15" }}>
                      <Star className="h-4 w-4 fill-yellow-400" />
                      4.5
                    </div>
                  </div>

                  <a
                    href={`/articles/${article._id}`}
                    className="block text-center text-sm font-semibold py-2 px-4 rounded transition"
                    style={{
                      backgroundColor: colors.dark,
                      color: colors.light,
                    }}
                  >
                    Voir détails
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
