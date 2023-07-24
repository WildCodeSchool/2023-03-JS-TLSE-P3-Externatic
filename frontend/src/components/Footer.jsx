// Footer.jsx
import "../css/components/Footer.css";
import linkedinWhite from "../assets/icons/linkedIn_white.svg";
import twitterWhite from "../assets/icons/twitter_white.svg";
import instagramWhite from "../assets/icons/instagram_white.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="left-column">
        <p className="contact-info">
          <strong>Contact</strong>
          <br />
          Tel. +33(0)2 8552 26 33
          <br />
          Mail: contact@externatic.fr
          <br />
          Adresse: 1 rue racine - 44000 NANTES - France
        </p>
      </div>
      <div className="groupReseaux">
        <h3>Réseaux sociaux</h3>
        <div className="middle-column">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icon footerItem"
              src={linkedinWhite}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src={twitterWhite} alt="Twitter" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src={instagramWhite} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="right-column">
        <p className="copyright">
          Externatic &copy; 2023 - Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
