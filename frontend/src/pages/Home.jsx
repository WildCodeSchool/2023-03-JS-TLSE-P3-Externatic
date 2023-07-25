import { useEffect, useState } from "react";
import axios from "axios";
import OfferCardCarousel from "../components/OfferCardCarousel";

function Home() {
  const [offersList, setOffersList] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offers`)
      .then((results) => setOffersList(results.data));
  }, []);
  return <OfferCardCarousel offersList={offersList} />;
}

export default Home;
