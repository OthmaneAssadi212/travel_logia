import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import colors from '../../constants/colors';


const Footer = () => {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const styles = {
    footer: {
      backgroundColor: colors.eucalyptus,
      color: colors.light,
      padding: '40px 20px 20px',
      marginTop: '60px',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '30px',
    },
    title: {
      fontWeight: 'bold',
      marginBottom: '10px',
      fontSize: '18px',
      color: colors.dark,
    },
    link: {
      textDecoration: 'none',
      color: colors.light,
      fontSize: '14px',
      display: 'block',
      marginBottom: '6px',
    },
    credit: {
      borderTop: `1px solid ${colors.olive}`,
      marginTop: '40px',
      paddingTop: '20px',
      textAlign: 'center',
      fontSize: '14px',
      color: colors.ivory,
    },
    logo: {
      fontWeight: 'bold',
      fontSize: '22px',
      marginBottom: '10px',
      color: colors.dark,
    },
    desc: {
      fontSize: '14px',
      color: colors.ivory,
      lineHeight: 1.6,
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Branding */}
        <div>
          <div style={styles.logo}>TravelLogia</div>
          <p style={styles.desc}>
            Explorez le monde avec nous. Créez vos itinéraires, inspirez-vous des récits de voyageurs et partagez vos propres aventures.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <div style={styles.title}>Navigation</div>
          <Link to="/" style={styles.link}>Accueil</Link>
          <Link to="/about" style={styles.link}>À propos</Link>
          <Link to="/blog" style={styles.link}>Blog</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </div>

        {/* Ressources */}
        <div>
          <div style={styles.title}>Ressources</div>
          <a href="https://www.nomadlist.com/" style={styles.link} target="_blank" rel="noreferrer">Nomad List</a>
          <a href="https://maps.google.com" style={styles.link} target="_blank" rel="noreferrer">Google Maps</a>
          <a href="https://www.booking.com/" style={styles.link} target="_blank" rel="noreferrer">Booking.com</a>
        </div>

        {/* Réseaux Sociaux */}
        <div>
          <div style={styles.title}>Suivez-nous</div>
          <a href="https://instagram.com" style={styles.link} target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://facebook.com" style={styles.link} target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://twitter.com" style={styles.link} target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>

      <div style={styles.credit}>
        &copy; {year} TravelLogia. Tous droits réservés. | Made by{' '}
        <a href="https://www.ionutcora.com" style={{ color: colors.light }} target="_blank" rel="noreferrer">
          Ionut Cora
        </a>
      </div>
    </footer>
  );
};

export default Footer;
