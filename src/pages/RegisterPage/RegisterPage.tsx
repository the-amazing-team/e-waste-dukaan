import "./RegisterPage.css"
import { IonPage } from "@ionic/react";

const RegisterPage: React.FC = () => {
  return (
    <IonPage className="ion-page">
      <div className="container">
          <div className="back-btn">Back</div>
          <div className="logo">
              <img src="src/pages/RegisterPage/img/logo.png" alt="logo" />
          </div>
          <form action="#">
              <input type="text" className="input-field" placeholder="Full Name" />
              <input type="text" className="input-field" placeholder="Select State" />
              <input type="text" className="input-field" placeholder="Select City" />
              <input type="text" className="input-field" placeholder="Email" />
              <input type="text" className="input-field" placeholder="Mobile No." />
              <input type="text" className="input-field" placeholder="Password" />
          </form>
          <div className="term-condition-elem">
              <div className="term-logo">
                  <img src="src/pages/RegisterPage/img/shield-check.png" alt="term-condition-logo" />
              </div>
              <div className="term-text">
                  Terms and Conditions
              </div>
          </div>
          <div className="check-options">
              <div className="option">
                  <div className="option-logo">
                      <img src="src/pages/RegisterPage/img/ring-check.png" alt="ring-logo" />
                  </div>
                  <div className="option-text">Vendors</div>
              </div>
              <div className="option">
                  <div className="option-logo">
                      <img src="src/pages/RegisterPage/img/ring-check.png" alt="ring-logo" />
                  </div>
                  <div className="option-text">Public</div>
              </div>
          </div>
          <button className="cta-register-btn">Register</button>
      </div>
    </IonPage>
  );
};

export default RegisterPage;
