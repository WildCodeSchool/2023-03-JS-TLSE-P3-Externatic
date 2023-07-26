// Footer.jsx
import "../css/components/Footer.css";
import linkedinWhite from "../assets/icons/linkedIn_white.svg";
import twitterWhite from "../assets/icons/twitter_white.svg";
import instagramWhite from "../assets/icons/instagram_white.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="leftColumn">
        <p className="contactInfo">
          <strong>Contact</strong>
          <br />
          Tel. +33(0)2 8552 26 33
          <br />
          Mail: contact@externatic.fr
          <br />
          Adresse: 1 rue racine - 44000 NANTES
        </p>
      </div>
      <div className="groupReseaux">
        <h3>Réseaux sociaux</h3>
        <div className="middleColumn">
          <a
            href="https://www.linkedin.com/company/externatic/"
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
            href="https://twitter.com/i/flow/login?redirect_after_login=%2FExternatic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src={twitterWhite} alt="Twitter" />
          </a>
          <a
            href="https://www.instagram.com/externatic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src={instagramWhite} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="rightColumn">
        <p className="copyright">
          Externatic &copy; 2023 - Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
