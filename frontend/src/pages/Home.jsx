import { useContext } from "react";
import axios from "axios";
import OfferCardList from "../components/OfferCardList";
import TokenContext from "../contexts/TokenContext";

function Home() {
  const { userCookie } = useContext(TokenContext);

  const verifyAdmin = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/verify`, {
        headers: {
          Authorization: `Bearer ${userCookie}`,
        },
      })
      .then((role) => {
        return role;
      });
  };
  return (
    <>
      <header className="App-header">
        <p>Home</p>
        {verifyAdmin() === "admin" ? "Admin" : "Pas admin"}
      </header>
      <OfferCardList />
    </>
  );
}

export default Home;
