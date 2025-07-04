// import React, { useState } from "react";
// import colors from "../constants/colors";

// const AddBlogPage = () => {
//   const [form, setForm] = useState({
//     title: "",
//     city: "",
//     description: "",
//     image: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Blog Submitted:", form);
   
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center px-4"
//       style={{ backgroundColor: colors.bgLight }}
//     >
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-md"
//       >
//         <h2
//           className="text-2xl font-semibold mb-6 text-center"
//           style={{ color: colors.olive }}
//         >
//           Ajouter une nouvelle expérience de voyage
//         </h2>

//         <div className="mb-4">
//           <label className="block mb-1 text-sm text-gray-700">Titre</label>
//           <input
//             type="text"
//             name="title"
//             value={form.title}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-xl focus:outline-none"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1 text-sm text-gray-700">Ville</label>
//           <input
//             type="text"
//             name="city"
//             value={form.city}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-xl focus:outline-none"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1 text-sm text-gray-700">Description</label>
//           <textarea
//             name="description"
//             value={form.description}
//             onChange={handleChange}
//             rows="5"
//             className="w-full px-4 py-2 border rounded-xl focus:outline-none"
//           ></textarea>
//         </div>

//         <div className="mb-6">
//           <label className="block mb-1 text-sm text-gray-700">Lien d'image </label>
//           <input
//             type="text"
//             name="image"
//             value={form.image}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-xl focus:outline-none"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full py-3 rounded-xl transition duration-200 ease-in-out"
//           style={{
//             backgroundColor: colors.olive,
//             color: colors.eucalyptus,
//           }}
//           onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#A7C1A8")}
//           onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.olive)}
//         >
//           Publier l'article
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddBlogPage;
// ===================================


// import React, { useState } from "react";
// import colors from "../constants/colors";

// const AddBlogPage = () => {
//   const [form, setForm] = useState({
//     title: "",
//     city: "",
//     description: "",
//     image: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });


//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!form.title.trim()) newErrors.title =  "titre requis";
//     if (!form.city.trim()) newErrors.city = "Nom de la ville requis";
//     if (!form.description.trim()) newErrors.description =  "description requise";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     console.log(" Blog envoyé avec succès:", form);

//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center px-4"
//       style={{ backgroundColor: colors.bgLight }}
//     >
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-md"
//       >
//         <h2
//           className="text-2xl font-semibold mb-6 text-center"
//           style={{ color: colors.olive }}
//         >
//           Ajouter une nouvelle expérience de voyage
//         </h2>

        
//         <div className="mb-4">
//           <label className="block mb-1 text-sm text-gray-700">Titre *</label>
//           <input
//             type="text"
//             name="title"
//             value={form.title}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border rounded-xl focus:outline-none ${
//               errors.title ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {errors.title && (
//             <p className="text-red-500 text-sm mt-1">{errors.title}</p>
//           )}
//         </div>


//         <div className="mb-4">
//           <label className="block mb-1 text-sm text-gray-700">Ville *</label>
//           <input
//             type="text"
//             name="city"
//             value={form.city}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border rounded-xl focus:outline-none ${
//               errors.city ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {errors.city && (
//             <p className="text-red-500 text-sm mt-1">{errors.city}</p>
//           )}
//         </div>

 
//         <div className="mb-4">
//           <label className="block mb-1 text-sm text-gray-700">
//             Description *
//           </label>
//           <textarea
//             name="description"
//             rows="5"
//             value={form.description}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border rounded-xl focus:outline-none ${
//               errors.description ? "border-red-500" : "border-gray-300"
//             }`}
//           ></textarea>
//           {errors.description && (
//             <p className="text-red-500 text-sm mt-1">{errors.description}</p>
//           )}
//         </div>

        
//         <div className="mb-6">
//           <label className="block mb-1 text-sm text-gray-700">
//             Lien d'image 
//           </label>
//           {/* <input
//             type="text"
//             name="image"
//             value={form.image}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
//           /> */}
//           <input
//   type="file"
//   name="image"
//   accept="image/*"
//   onChange={handleImageChange}
//   className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
// />

//         </div>

//         <button
//           type="submit"
//           className="w-full py-3 rounded-xl transition duration-200 ease-in-out"
//           style={{
//             backgroundColor: colors.olive,
//             color: colors.eucalyptus,
//           }}
//           onMouseEnter={(e) =>
//             (e.currentTarget.style.backgroundColor = "#A7C1A8")
//           }
//           onMouseLeave={(e) =>
//             (e.currentTarget.style.backgroundColor = colors.olive)
//           }
//         >
//           Publier l'article
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddBlogPage;

// ==========================

import React, { useState } from "react";

const AddBlogPage = () => {
  const [form, setForm] = useState({
    title: "",
    city: "",
    description: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = "titre requis";
    if (!form.city.trim()) newErrors.city = "Nom de la ville requis";
    if (!form.description.trim()) newErrors.description = "description requise";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("city", form.city);
    formData.append("description", form.description);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const res = await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log(" Blog ajouté:", data);
      setSuccessMsg("La publication a été ajoutée avec succès !");
      setForm({ title: "", city: "", description: "" });
      setImageFile(null);
    } catch (err) {
      console.error("Erreur:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#EEEFE0]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#819A91]">
          Ajouter une nouvelle expérience
        </h2>

        {successMsg && (
          <p className="text-green-600 text-center mb-4">{successMsg}</p>
        )}


        <div className="mb-4">
          <label className="block mb-1 text-sm">Titre *</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-xl focus:outline-none ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Ville *</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-xl focus:outline-none ${
              errors.city ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Description *</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="5"
            className={`w-full px-4 py-2 border rounded-xl focus:outline-none ${
              errors.description ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        
        <div className="mb-6">
          <label className="block mb-1 text-sm">Image </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

   
        <button
          type="submit"
          className="w-full py-3 rounded-xl font-semibold transition duration-200"
          style={{
            backgroundColor: "#819A91",
            color: "#EEEFE0",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#A7C1A8")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#819A91")
          }
        >
          Publier l'article
        </button>
      </form>
    </div>
  );
};

export default AddBlogPage;
