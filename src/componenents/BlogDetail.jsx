import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import colors from "../constants/colors";

const API_BASE = import.meta.env.VITE_BACKEND_URL;

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE}/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur de chargement:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "5rem", color: colors.dark }}>
        Chargement...
      </div>
    );
  }

  if (!blog) {
    return (
      <div style={{ textAlign: "center", marginTop: "5rem", color: "red" }}>
        Blog non trouvé.
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: colors.ivory,
        minHeight: "100vh",
        padding: "3rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          backgroundColor: colors.olive,
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            color: colors.dark,
            fontSize: "2.2rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          {blog.title}
        </h1>

        {blog.imageCover && (
          <img
            src={blog.imageCover}
            alt={blog.title}
            style={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "0.75rem",
              marginBottom: "1.5rem",
            }}
          />
        )}

        {blog.images?.length > 0 && (
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            {blog.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Image ${idx + 1}`}
                style={{
                  width: "150px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                }}
              />
            ))}
          </div>
        )}

        <p style={{ color: colors.mint, fontSize: "0.9rem", marginBottom: "1rem" }}>
          Publié le : {new Date(blog.createdAt).toLocaleDateString("fr-FR")}
        </p>

        <div
          style={{
            fontSize: "1rem",
            lineHeight: "1.8",
            color: colors.dark,
            marginBottom: "2rem",
          }}
        >
          {blog.slug || "Aucune description disponible."}
        </div>

        <button
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: colors.dark,
            color: colors.light,
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ← Retour
        </button>
      </div>
    </div>
  );
}
