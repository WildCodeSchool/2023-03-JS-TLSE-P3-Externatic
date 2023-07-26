import { useMemo } from "react";
import PropTypes from "prop-types";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import OfferCardLarge from "./OfferCardLarge";

function OfferCardCarousel({ offersList }) {
  const randomIndexes = useMemo(() => {
    const totalOffers = offersList.length;
    const indexes = new Set();
    const numToDisplay = Math.min(totalOffers, 5);
    while (indexes.size < numToDisplay) {
      const randomIndex = Math.floor(Math.random() * totalOffers);
      indexes.add(randomIndex);
    }
    return Array.from(indexes);
  }, [offersList]);
  const randomOffers = useMemo(
    () => randomIndexes.map((index) => offersList[index]),
    [offersList, randomIndexes]
  );
  return (
    <Carousel showThumbs={false}>
      {randomOffers.length
        ? randomOffers.map((offer) => (
            <div key={offer.id}>
              <OfferCardLarge offer={offer} />
            </div>
          ))
        : null}
    </Carousel>
  );
}

export default OfferCardCarousel;

OfferCardCarousel.propTypes = {
  offersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
