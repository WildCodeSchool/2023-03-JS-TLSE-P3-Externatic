import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import OfferCardLarge from "../components/OfferCardLarge";
import OfferModal from "../components/OfferModal";
import searchBlack from "../assets/icons/search_black.svg";
import externaticHello from "../assets/icons/externatic-hello.svg";
import externaticSablier from "../assets/icons/externatic-sablier.svg";
import rocketPink from "../assets/icons/rocket_pink.svg";
import "../css/pages/Home.css";

function Home() {
  const [offersList, setOffersList] = useState([]);
  const [modalOfferIsOpen, setModalOfferIsOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState({});
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);

  const handleOpenModalOffer = (offerId) => {
    const findOffer = offersList.find((offer) => offer.id === offerId);
    setSelectedOffer(findOffer);
    setModalOfferIsOpen(true);
  };

  const rotateCarousel = () => {
    const cardWidth = carouselWidth / 4;
    const visibleCards = Math.floor(carouselWidth / cardWidth);
    const totalCards = offersList.length;
    const newIndex = (activeIndex + visibleCards) % totalCards; // Utiliser visibleCards ici

    setActiveIndex(newIndex);
    carouselRef.current.style.transform = `translateX(-${
      newIndex * cardWidth
    }px)`;
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offers`)
      .then((results) => setOffersList(results.data));
  }, []);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      rotateCarousel();
    }, 5000);

    return () => {
      clearInterval(carouselInterval);
    };
  }, [offersList]);

  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.offsetWidth);
    }
  }, [carouselRef]);

  // traitement de chevrons gauche/droite
  const moveCarousel = (index) => {
    const cardWidth = carouselWidth / 4;
    carouselRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
  };

  const handlePrev = () => {
    const newIndex = (activeIndex - 1 + offersList.length) % offersList.length;
    setActiveIndex(newIndex);
    moveCarousel(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % offersList.length;
    setActiveIndex(newIndex);
    moveCarousel(newIndex);
  };

  return (
    <div>
      <OfferModal
        modalOfferIsOpen={modalOfferIsOpen}
        setModalOfferIsOpen={setModalOfferIsOpen}
        offer={selectedOffer}
      />
      <div className="container_Home">
        <div className="imageContainer">
          <img
            src="../src/assets/images/header_image.svg"
            alt="page d'accueil de l'entreprise"
          />
        </div>
        <div className="searchContainer">
          <img className="iconForm_1" src={searchBlack} alt="person" />
          <input
            type="text"
            placeholder="Web développeur, data analyst ..."
            className="searchInput"
          />
        </div>
      </div>
      <div className="carouselContainer">
        <button
          className="button carouselButton prevButton"
          type="button"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <div className="carouselContent" ref={carouselRef}>
          {offersList.length ? (
            offersList.map((offer, index) => (
              <div
                className={`carouselItem ${
                  index === activeIndex ? "active" : ""
                }`}
                key={offer.id}
              >
                <OfferCardLarge
                  offer={offer}
                  modalOfferIsOpen={modalOfferIsOpen}
                  setModalOfferIsOpen={setModalOfferIsOpen}
                  onCardClick={handleOpenModalOffer}
                />
              </div>
            ))
          ) : (
            <div className="globalContainer">
              <img className="iconForm_1" src={searchBlack} alt="person" />
              <h3 className="errorTitle">Pas de résultat</h3>
            </div>
          )}
        </div>
        <button
          className="button carouselButton nextButton"
          type="button"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
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
    </div>
  );
}

export default Home;
