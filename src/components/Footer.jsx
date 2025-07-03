import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} TravelLogia. Tous droits réservés.</p>
      <ul className="footer__links">
        <li><a href="/legal" className="footer__link">Mentions légales</a></li>
        <li><a href="/privacy" className="footer__link">Politique de confidentialité</a></li>
        <li><a href="/contact" className="footer__link">Contact</a></li>
      </ul>
    </footer>
  )
}
