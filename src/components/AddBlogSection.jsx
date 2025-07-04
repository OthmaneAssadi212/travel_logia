import React from "react";
import colors from "../constants/colors" 
import { useNavigate } from "react-router-dom";

const AddBlogSection = () => {
  const navigate = useNavigate();

  const handleAddBlog = () => {
    navigate("/blog/add"); // Navigue vers /add
  };

  return (
    <div className="relative w-screen   overflow-hidden p-6">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-emerald-800/80 z-0"></div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD3IxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-10 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center p-8 md:p-12 min-h-[250px]">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Partagez votre aventure marocaine
        </h2>

        <p className="text-lg md:text-xl mb-6 text-white/90 max-w-2xl">
          Vous voulez partager votre expérience de voyage ? 
          Ajoutez votre article de blog et inspirez d'autres explorateurs à découvrir le Maroc !
        </p>

        {/* Utilisation d'un bouton avec navigation manuelle */}
        <button
          onClick={handleAddBlog}
          className="px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          style={{
            background: "linear-gradient(to right, #059669, #047857)",
            color: "white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "linear-gradient(to right, #047857, #065f46)";
            e.currentTarget.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "linear-gradient(to right, #059669, #047857)";
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          }}
        >
          Ajouter un blog
        </button>
      </div>
    </div>
  );
};

export default AddBlogSection;
