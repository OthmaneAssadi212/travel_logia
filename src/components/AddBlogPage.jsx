import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import colors from "../constants/colors";


function CreateBlog() {
  const { api, user } = useAuth();

  const [form, setForm] = useState({
    title: "",
    slug: "",
    imageCover: null,
    images: [],
  });

  const [message, setMessage] = useState({ error: "", success: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const slugified = name === "title" ? value.toLowerCase().trim().replace(/\s+/g, "_") : form.slug;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      slug: name === "title" ? slugified : prev.slug,
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
    formData.append("slug", form.slug);
    formData.append("imageCover", form.imageCover);
    form.images.forEach((img) => formData.append("images", img));

    try {
      const token = user?.token;
      const res = await api.post("/blogs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage({ success: "Blog créé avec succès !", error: "" });
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

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ color: colors.dark }}>Slug (auto)</label>
          <input
            name="slug"
            type="text"
            value={form.slug}
            readOnly
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "1px solid #ccc",
              marginTop: "0.5rem",
              backgroundColor: "#f0f0f0",
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ color: colors.dark }}>Image de couverture *</label>
          <input type="file" accept="image/*" onChange={handleImageCover} required />
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ color: colors.dark }}>Autres images</label>
          <input type="file" accept="image/*" multiple onChange={handleImages} />
        </div>

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
