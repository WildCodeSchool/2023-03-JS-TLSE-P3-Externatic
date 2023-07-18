import React from "react";
import "../css/components/Footer.css";

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
      <div className="right-column">
        <p className="copyright">
          Externatic &copy; 2023 - Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
