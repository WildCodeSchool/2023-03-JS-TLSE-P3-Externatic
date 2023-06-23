import { Route, Routes } from "react-router-dom";

// Import des pages
import FieldsManagement from "./admins/FieldsManagement";
import OffersManagement from "./admins/OffersManagement";
import ReportsManagement from "./admins/ReportsManagement";
import UsersManagement from "./admins/UsersManagement";
import MyApplications from "./applicants/MyApplications";
import MyFavoritesOffers from "./applicants/MyFavoritesOffers";
import MySearches from "./applicants/MySearches";
import MyPublishedOffers from "./companies/MyPublishedOffers";
import MyReceivedApplications from "./companies/MyReceivedApplications";
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
        <Route path="reports-management" element={<ReportsManagement />} />
        <Route path="users-management" element={<UsersManagement />} />
        <Route path="my-applications" element={<MyApplications />} />
        <Route path="my-favorite-offers" element={<MyFavoritesOffers />} />
        <Route path="my-searches" element={<MySearches />} />
        <Route path="my-published-offers" element={<MyPublishedOffers />} />
        <Route
          path="my-received-applications"
          element={<MyReceivedApplications />}
        />
        <Route path="my-profile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default Dashboard;
