import AdminNavbar from "../../components/navbar/admin/AdminNavbar";
import "./admin.css";
import { Routes, Route } from "react-router-dom";
import Requests from "./Requests/Requests";

const Admin = () => {
  return (
    <>
      <AdminNavbar />
      <div className="admin-wrapper">
        <Routes>
          <Route path="/" element={<Requests />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/taxes" element={<>Taxes</>}></Route>
          <Route path="/settings" element={<>Settings</>}></Route>
        </Routes>
      </div>
    </>
  );
};
export default Admin;
