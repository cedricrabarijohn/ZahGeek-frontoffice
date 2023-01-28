import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home/Home";
import Signin from "./screens/Signin/Signin";
import Signup from "./screens/Signup/Signup";
import { app_title } from "./infos";
import SigninAdmin from "./screens/SigninAdmin/SigninAdmin";
import NotFound from "./screens/NotFound/NotFound";
import Footer from "./components/footer/Footer";
import { ProSidebarProvider } from 'react-pro-sidebar';
import Admin from "./screens/Admin/Admin";

function App() {
  useEffect(() => {
    if (window.document.title === "React App") {
      window.document.title = app_title;
    }
  }, []);
  return (
    <div>
      <ProSidebarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/admin/signin" element={<SigninAdmin />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/app/*" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ProSidebarProvider>
      <Footer />
    </div>
  );
}

export default App;
