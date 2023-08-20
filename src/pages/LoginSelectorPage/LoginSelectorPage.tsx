import "./LoginSelectorPage.css"
import { IonPage } from "@ionic/react";

const LoginSelectorPage: React.FC = () => {
  return (
    <IonPage className="ion-page">
      <div className="container">
        <div className="logo">
            <img src="src/pages/LoginSelectorPage/img/logo.png" alt="logo" />
        </div>
        <div className="sub-heading">
            Be the contributor to<br />
            save mother earth.
        </div>
        <button className="login-btn">Log In</button>
        <button className="sign-in-btn">Sign in</button>
        <div className="instruction">
            Don't have an account? <br />
            Please sign in.
        </div>
    </div>
    </IonPage>
  );
};

export default LoginSelectorPage;