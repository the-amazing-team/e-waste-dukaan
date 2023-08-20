import "./HomePage.css"
import { IonPage } from "@ionic/react";

const HomePage: React.FC = () => {
  return (
    <IonPage className="ion-page">
      <div className="container">
          <div className="logo">
              <img src="src/pages/HomePage/img/logo.png" alt="logo" />
          </div>
          <button className="cta-sell-scrap-btn">Sell Scrap</button>
          <div className="banner-slides">
              <div className="slide">
                  <div className="slide-image">
                      <img src="src/pages/HomePage/img/shield.png" alt="shield-image" />
                  </div>
                  <div className="slide-text">
                      We ensure that your scrap is under verified hands 
                  </div>
              </div>
          </div>
          <div className="delivery-made-img-box">
              Nice to see you <br />
              Impact made by us
          </div>
          {/* <!-- <div className="spacing"></div> --> */}
      </div>
      <div className="nav-bar">
          <div className="item">
              <div className="item-logo">
                  <img src="src/pages/HomePage/img/nav/home.png" alt="home" />
              </div>
              <div className="item-text">
                  Home
              </div>
          </div>
          <div className="item">
              <div className="item-logo">
                  <img src="src/pages/HomePage/img/nav/schedule.png" alt="home" />
              </div>
              <div className="item-text">
                  Schedule
              </div>
          </div>
          <div className="item">
              <div className="item-logo">
                  <img src="src/pages/HomePage/img/nav/map.png" alt="home" />
              </div>
              <div className="item-text">
                  Maps
              </div>
          </div>
          <div className="item">
              <div className="item-logo">
                  <img src="src/pages/HomePage/img/nav/pickup.png" alt="home" />
              </div>
              <div className="item-text">
                  Pickups
              </div>
          </div>
          <div className="item">
              <div className="item-logo">
                  <img src="src/pages/HomePage/img/nav/profile.png" alt="home" />
              </div>
              <div className="item-text">
                  Profile
              </div>
          </div>
      </div>
    </IonPage>
  );
};

export default HomePage;
