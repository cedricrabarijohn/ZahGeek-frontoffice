import UserNavbar from "../../components/navbar/user/UserNavbar";
import "./home.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Requests from "./Requests/Requests";
import Footer from "../../components/footer/Footer";
import NewRequest from "./NewRequest/NewRequest";
import MyDocument from "./MyDocument/MyDocument";
import UserSideBar from "../../components/sidebar/user/UserSideBar";

const Home = () => {
  return (
    <>
      <UserNavbar />
      <div className="home-wrapper">
      <UserSideBar />
        <Routes>
          <Route path="/" element={<Requests />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/new-request" element={<NewRequest />} />
          <Route path="/taxes" element={<div>Impots non payes</div>} />
          <Route path="/faq" element={<div>FAQ</div>} />
          <Route path="/document/:id" element={<MyDocument />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Home;
