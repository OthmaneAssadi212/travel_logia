import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import colors from "../constants/colors";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data.data); // 👈 assure-toi que ton API renvoie { data: { ... } }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur de chargement:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Chargement...</p>;
  if (!blog) return <p className="text-center mt-10">Blog non trouvé.</p>;

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4" style={{ color: colors.dark }}>
        {blog.title}
      </h1>

      {blog.imageCover && (
        <img
          src={`/uploads/blogs/${blog.imageCover}`}
          alt={blog.title}
          className="w-full h-96 object-cover rounded mb-6"
        />
      )}

      <p className="text-sm mb-4 text-gray-600">
        Publié le : {new Date(blog.createdAt).toLocaleDateString("fr-FR")}
      </p>

      <div className="text-base leading-7 mb-6" style={{ color: colors.dark }}>
        {blog.content || blog.description}
      </div>

      <button
        onClick={() => navigate(-1)}
        className="py-2 px-6 rounded"
        style={{
          backgroundColor: colors.dark,
          color: colors.light,
        }}
      >
        ← Retour
      </button>
    </div>
  );
}
