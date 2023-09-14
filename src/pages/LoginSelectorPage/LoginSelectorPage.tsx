import "./LoginSelectorPage.css"
import { IonPage } from "@ionic/react";

import Logo from "./img/logo.png"
import { Link } from "react-router-dom";

const LoginSelectorPage: React.FC = () => {
  return (
    <IonPage className="ion-page">
      <div className="container">
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>
        <div className="sub-heading">
            Be the contributor to<br />
            save mother earth.
        </div>
        <button className="sign-in-btn"><Link to="login-page">Log In</Link></button>
        <button className="sign-in-btn"><Link to="/register-page">Sign in</Link></button>
        <div className="instruction">
            Don't have an account? <br />
            Please sign in.
        </div>
    </div>
    </IonPage>
  );
};

export default LoginSelectorPage;
