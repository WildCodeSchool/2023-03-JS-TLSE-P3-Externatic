import OfferCardLarge from "../components/OfferCardLarge";
import OfferCardList from "../components/OfferCardList";

function Home() {
  return (
    <>
      <header className="App-header">
        <p>Home</p>
      </header>
      <OfferCardList />
      <OfferCardLarge />
    </>
  );
}

export default Home;
