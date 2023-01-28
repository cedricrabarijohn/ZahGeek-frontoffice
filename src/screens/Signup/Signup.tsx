import { useEffect } from "react";
import { app_title } from "../../infos";
import DisconnectedNavbar from "../../components/navbar/disconnected/DisconnectedNavbar";
import "./signup.css";
import SignupForms from "./SignupForms/SignupForms";

const Signup = () => {
  useEffect(() => {
    window.document.title = `${app_title} | Inscription`;
  }, []);
  return (
    <>
      <DisconnectedNavbar />
      <div className="signup-wrapper">
        <h1 className="signup-title">Inscription</h1>
        <div className="signup-description">
          Bonjour, bienvenue sur le site {app_title}. Veuillez remplir les
          informations demandees afin de pouvoir vous inscrire
          <br />
          <br />
          <div className="already-signed-up">Deja inscrit ?</div>
        </div>
        <div className="signup-forms">
          <SignupForms />
        </div>
      </div>
    </>
  );
};

export default Signup;
