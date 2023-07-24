// Imports des packages
import React, { useState } from "react";

// import OfferCardLarge from "../components/OfferCardLarge";
import OfferModal from "../components/OfferModal";
import InputSearch from "../components/InputSearch";

// Import des assets
import externaticHello from "../assets/icons/externatic-hello.svg";
import externaticSablier from "../assets/icons/externatic-sablier.svg";
import rocketPink from "../assets/icons/rocket_pink.svg";
import imageHeader from "../assets/images/header_image.svg";

function Home() {
  const [modalOfferIsOpen, setModalOfferIsOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState({});
  console.error(setSelectedOffer);
  return (
    <>
      <div className="containerHome">
        <OfferModal
          modalOfferIsOpen={modalOfferIsOpen}
          setModalOfferIsOpen={setModalOfferIsOpen}
          offer={selectedOffer}
        />
        <img
          className="imageContainer"
          src={imageHeader}
          alt="illustration recruteur candidat"
        />
      </div>
      <InputSearch />
      <div className="descriptionHome">
        <div className="itemtext">
          <h2>La réussite de notre cabinet de recrutement informatique ?</h2>
          <div className="TextIcon">
            <img className="iconForm" src={externaticHello} alt="proximite" />
            <h3>Notre proximité</h3>
          </div>
          <p>
            L'expérience professionnelle est une chose. L'expérience de vie en
            est une autre. Alors nos consultants prennent le temps de faire
            connaissance avec chaque personne, pour comprendre le contexte, le
            parcours, les envies et les projets.
          </p>
        </div>
        <div className="ItemText">
          <div className="TextIcon">
            <img className="iconForm" src={rocketPink} alt="performance" />
            <h3>Notre performance</h3>
          </div>
          <p>
            Notre réseau est une force et nous y travaillons sans relâche. Notre
            expérience nous permet d'identifier les vrais besoins d'une
            entreprise et de ceux qui la rejoignent.
          </p>
        </div>
      </div>
      <div className="itemtext">
        <div className="TextIcon">
          <img className="iconForm" src={externaticSablier} alt="durabilite" />
          <h3>Notre durabilité</h3>
        </div>
        <p>
          Notre challenge est de trouver l'équipe qui fonctionnera ensemble de
          manière professionnelle et personnelle, pour aller jusqu'au bout d'un
          projet commun. Notre responsabilité vis-à-vis des impacts de nos
          décisions et nos actions sur le long terme correspond également à
          notre politique RSE.
        </p>
      </div>
    </>
  );
}

export default Home;
