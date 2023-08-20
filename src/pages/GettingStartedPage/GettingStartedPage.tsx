import "./GettingStartedPage.css"
import { IonImg, IonPage } from "@ionic/react";

const GettingStartedPage: React.FC = () => {
  return (
    <IonPage className="ion-page">
      <div className="container">
          <div className="logo">
              <img src="src/pages/GettingStartedPage/img/logo.png" alt="logo" />
          </div>
          <div className="welcome-background">
              <img src="src/pages/GettingStartedPage/img/welcome.png" alt="background-image" />
          </div>
          <div className="quote">
              Be the part of the solution not the part <br />
              of the pollution
          </div>
          <div className="cta-getting-started">Getting Started</div>
          <div className="sub-cta-line">E-Waste | Large Appliance</div>
      </div>
    </IonPage>
  );
};

export default GettingStartedPage;
