import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import colors from "../constants/colors";


const AboutUs = () => {
  return (
    <div
      className="min-h-screen pt-10 pb-20 px-5"
      style={{ backgroundColor: colors.ivory }}
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* Image Section */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/hero_about.jpg"
            alt="About Travel"
            className="rounded-xl shadow-lg w-4/5 sm:w-full"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 w-full text-center lg:text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="text-4xl sm:text-5xl font-bold mb-6 uppercase"
            style={{ color: colors.dark }}
          >
            À propos de TravelLogia
          </h1>

          <p className="mb-4 text-lg leading-relaxed" style={{ color: colors.eucalyptus }}>
            TravelLogia est une plateforme conçue pour vous aider à planifier vos aventures autour du monde.
            Que vous soyez amateur d’exploration, voyageur en famille ou digital nomad, notre blog vous fournit
            des itinéraires sur mesure, des recommandations locales, et des astuces pour voyager intelligemment.
          </p>

          <p className="mb-6 text-lg leading-relaxed" style={{ color: colors.eucalyptus }}>
            Nous croyons que le voyage ne devrait pas être stressant. Grâce à notre générateur d’itinéraires,
            nos articles filtrables par budget, destination ou durée, et notre communauté engagée, vous avez
            tout en main pour vivre des expériences inoubliables.
          </p>

          <Link to="/itineraries">
            <button
              className="px-6 py-3 text-lg rounded-md shadow-md transition"
              style={{
                backgroundColor: colors.eucalyptus,
                color: colors.light,
              }}
            >
              Explorer nos itinéraires
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Valeurs */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "🌍 Authentique",
            desc: "Nos contenus sont créés par des voyageurs pour des voyageurs. Pas de tourisme de masse, mais des expériences vraies.",
          },
          {
            title: "🧭 Personnalisé",
            desc: "Créez vos propres itinéraires selon vos envies, budget et contraintes, grâce à nos outils intuitifs.",
          },
          {
            title: "🤝 Communautaire",
            desc: "Partagez vos aventures, découvrez celles des autres et échangez des conseils dans une ambiance bienveillante.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="rounded-xl shadow-md p-6"
            style={{ backgroundColor: colors.olive }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-2" style={{ color: colors.dark }}>
              {item.title}
            </h3>
            <p className="text-base" style={{ color: colors.eucalyptus }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
