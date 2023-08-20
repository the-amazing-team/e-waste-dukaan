import "./LoginPage.css"
import { IonPage } from "@ionic/react";

const LoginPage: React.FC = () => {
  return (
    <IonPage className="ion-page">
      <div className = 'center'>
        <h1> Login </h1>
          <form method = "post"> 
          <div className="txt_field">
              <input type="text" required />
              <span> </span>
              <label>
                Username
              </label>
          </div>
          <div className="txt_field">
              <input type="password" required />
              <span> </span>
              <label>
                Password
              </label>
          </div>
          <div className ="pass"> Forget Password? </div>
          <input type = "submit"  value = " Login" className="login-btn" />
          <div className = "signup_link"> 
              Not  a member ? <a href="#">signup</a>
          </div>
      </form>
      </div>
    </IonPage>
  );
};

export default LoginPage;
