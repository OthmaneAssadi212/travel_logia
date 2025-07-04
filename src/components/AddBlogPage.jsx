import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import colors from "../constants/colors";

function CreateBlog() {
  const { api, user } = useAuth();

  const [form, setForm] = useState({
    title: "",
    slug: "", // description réelle
    imageCover: null,
    images: [],
  });

  const [message, setMessage] = useState({ error: "", success: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageCover = (e) => {
    setForm((prev) => ({ ...prev, imageCover: e.target.files[0] }));
  };

  const handleImages = (e) => {
    setForm((prev) => ({ ...prev, images: Array.from(e.target.files) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ error: "", success: "" });

    if (!form.imageCover) {
      return setMessage({ error: "Image de couverture obligatoire", success: "" });
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("slug", form.slug); // contient la description réelle
    formData.append("imageCover", form.imageCover);
    form.images.forEach((img) => formData.append("images", img));

    try {
      const token = localStorage.getItem("token") ?? null;
      console.log(token)
      await api.post("/blogs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage({ success: "Blog créé avec succès !", error: "" });
      setForm({ title: "", slug: "", imageCover: null, images: [] });
    } catch (err) {
      setMessage({
        error: err.response?.data?.message || "Erreur lors de l'envoi",
        success: "",
      });
    }
  };

  return (
    <div style={{ backgroundColor: colors.ivory, minHeight: "100vh", padding: "2rem" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: colors.olive,
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            marginBottom: "1rem",
            textAlign: "center",
            color: colors.dark,
            fontSize: "1.8rem",
          }}
        >
          Créer un nouveau blog
        </h2>

        {message.error && <div style={{ color: "red", marginBottom: "1rem" }}>{message.error}</div>}
        {message.success && <div style={{ color: "green", marginBottom: "1rem" }}>{message.success}</div>}

        {/* Title */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ color: colors.dark }}>Titre</label>
          <input
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "1px solid #ccc",
              marginTop: "0.5rem",
            }}
          />
        </div>

        {/* Description (slug) */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ color: colors.dark }}>Description</label>
          <textarea
            name="slug"
            value={form.slug}
            onChange={handleChange}
            rows="4"
            placeholder="Écris une description de ton article..."
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              border: "1px solid #ccc",
              marginTop: "0.5rem",
              resize: "vertical",
            }}
          />
        </div>

        {/* Cover image */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ color: colors.dark }}>Image de couverture *</label>
          <input type="file" accept="image/*" onChange={handleImageCover} required />
          {form.imageCover && (
            <div style={{ marginTop: "1rem" }}>
              <img
                src={URL.createObjectURL(form.imageCover)}
                alt="cover-preview"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "0.75rem",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              />
            </div>
          )}
        </div>

        {/* Other images */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ color: colors.dark }}>Autres images</label>
          <input type="file" accept="image/*" multiple onChange={handleImages} />
          {form.images.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                gap: "0.75rem",
                marginTop: "1rem",
              }}
            >
              {form.images.map((img, i) => (
                <img
                  key={i}
                  src={URL.createObjectURL(img)}
                  alt={`upload-${i}`}
                  style={{
                    width: "100%",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: colors.dark,
            color: colors.light,
            padding: "0.75rem",
            fontWeight: "bold",
            borderRadius: "0.5rem",
            cursor: "pointer",
            border: "none",
            transition: "0.3s",
          }}
        >
          Publier le blog
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
