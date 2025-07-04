import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Si vous gérez un utilisateur déjà connecté via localStorage
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirm) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Erreur serveur");
      // Enregistrer token / user si besoin
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center">Inscription</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Nom complet"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="password"
          type="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="confirm"
          type="password"
          placeholder="Confirmez le mot de passe"
          value={form.confirm}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "En cours..." : "S’inscrire"}
        </button>
      </form>
      <p className="mt-4 text-center text-sm">
        Déjà un compte ?{" "}
        <a href="/login" className="text-blue-600 hover:underline">
          Connectez-vous
        </a>
      </p>
    </div>
  );
}

export default Register;
