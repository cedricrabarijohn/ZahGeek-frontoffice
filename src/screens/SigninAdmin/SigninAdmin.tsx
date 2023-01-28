import { Button, Input } from "@material-ui/core";
// import { useState } from "react";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import DisconnectedNavbar from "../../components/navbar/disconnected/DisconnectedNavbar";
import { app_title } from "../../infos";
import "./signin-admin.css";
import "aos/dist/aos.css";

const SigninAdmin = () => {
  useEffect(() => {
    window.document.title = `${app_title} | Connexion`;
  }, []);
  // const navigate = useNavigate();

  // const [email, set_email] = useState("");
  // const [password, set_password] = useState("");

  const handle_signin = () => {
    // navigate("/");
    window.location.href = "/admin";
  };
  return (
    <>
      <DisconnectedNavbar />
      <div className="signin-admin-wrapper">
        <div className="signin-admin-form" data-aos="fade-up" data-aos-duration="500">
          <div className="signin-admin-title">
            <h1>Admin | Login </h1>
          </div>
          <div className="signin-admin-email-password">
            <div className="signin-admin-email">
              <div className="signin-admin-label">email</div>
              <div className="signin-admin-input">
                <Input
                  type="text"
                  style={{ color: "rgb(158, 158, 158)" }}
                  spellCheck={false}
                />
              </div>
            </div>
            <div className="signin-admin-password">
              <div className="signin-admin-label">mot de passe</div>
              <div className="signin-admin-input">
                <Input
                  type="password"
                  style={{ color: "rgb(158, 158, 158)" }}
                  spellCheck={false}
                />
              </div>
            </div>
          </div>
          <div className="signin-admin-validate">
            <Button
              onClick={() => {
                handle_signin();
              }}
              style={{
                color: "white",
                backgroundColor: "green",
                fontSize: 12,
                padding: 10,
                width: "100%",
              }}
            >
              Se connecter
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninAdmin;
