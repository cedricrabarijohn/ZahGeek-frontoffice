import { Button, Input } from "@material-ui/core";
// import { useState } from "react";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import DisconnectedNavbar from "../../components/navbar/disconnected/DisconnectedNavbar";
import { app_title } from "../../infos";
import "./signin.css";
import "aos/dist/aos.css";

const Signin = () => {
  useEffect(() => {
    window.document.title = `${app_title} | Connexion`;
  }, []);
  // const navigate = useNavigate();

  // const [email, set_email] = useState("");
  // const [password, set_password] = useState("");

  const handle_signin = () => {
    // navigate("/");
    window.location.href = "/app";
  };
  return (
    <>
      <DisconnectedNavbar />
      <div className="signin-wrapper">
        <div className="signin-form" data-aos="fade-up" data-aos-duration="500">
          <div className="signin-title">
            <h1>Login</h1>
          </div>
          <div className="signin-email-password">
            <div className="signin-email">
              <div className="signin-label">email</div>
              <div className="signin-input">
                <Input
                  type="text"
                  style={{ color: "rgb(158, 158, 158)" }}
                  spellCheck={false}
                />
              </div>
            </div>
            <div className="signin-password">
              <div className="signin-label">mot de passe</div>
              <div className="signin-input">
                <Input
                  type="password"
                  style={{ color: "rgb(158, 158, 158)" }}
                  spellCheck={false}
                />
              </div>
            </div>
          </div>
          <div className="signin-validate">
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
            <div className="forgot-password" style={{
              textAlign:'center',
              color: 'blue',
              marginTop: 20,
              cursor: 'pointer'
            }}>
              Mot de passe oublié ?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
