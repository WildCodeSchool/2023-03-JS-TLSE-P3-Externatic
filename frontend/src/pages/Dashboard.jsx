import { Route, Routes } from "react-router-dom";

// Import des pages
import FieldsManagement from "./admins/FieldsManagement";
import OffersManagement from "./admins/OffersManagement";
import UsersManagement from "./admins/UsersManagement";
import MyFavoritesOffers from "./applicants/MyFavoritesOffers";
import MyPublishedOffers from "./companies/MyPublishedOffers";
import MyProfile from "./MyProfile";

// Import des composants
import SecondaryNavBar from "../components/SecondaryNavBar";

function Dashboard() {
  return (
    <>
      <SecondaryNavBar />
      <Routes>
        <Route path="fields-management" element={<FieldsManagement />} />
        <Route path="offers-management" element={<OffersManagement />} />
        <Route path="users-management" element={<UsersManagement />} />
        <Route path="my-favorite-offers" element={<MyFavoritesOffers />} />
        <Route path="my-published-offers" element={<MyPublishedOffers />} />
        <Route path="my-profile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default Dashboard;
