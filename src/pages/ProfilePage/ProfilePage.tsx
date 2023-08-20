import "./ProfilePage.css"
import { IonPage } from "@ionic/react";

const HomePage: React.FC = () => {
  return (
    <IonPage className="ion-page">
      <div className="container">
            <div className="back-btn">Back</div>
            <div className="header">
                <div className="logo">
                    <img src="src/pages/ProfilePage/img/logo.png" alt="logo" />
                </div>
                <div className="term-condition-btn">
                    <img src="src/pages/ProfilePage/img/term-condition.png" alt="term-condition" />
                </div>
            </div>
            <div className="hello">
                <div className="hello-text">Hello Sneha!</div>
                <div className="hello-points">
                    <div className="hello-points-text">
                        Your points are!
                    </div>
                    <div className="hello-points-value">
                        3,000
                    </div>
                </div>
            </div>
            <div className="articles">
                <div className="article">
                    <div className="article-image">
                        <img src="src/pages/ProfilePage/img/article-one.png" alt="article-one-image" />
                    </div>
                    <div className="article-text">
                        10 ways plastic is impacting the world
                    </div>
                    <div className="article-btn">
                        Learn More 
                    </div>
                </div>
                <div className="article">
                    <div className="article-image">
                        <img src="src/pages/ProfilePage/img/article-two.png" alt="article-one-image" />
                    </div>
                    <div className="article-text">
                        10 ways plastic is impacting the world
                    </div>
                    <div className="article-btn">
                        Learn More 
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="banner-content">
                    <div className="banner-header">
                        #YOOP
                    </div>
                    <div className="banner-text">
                        Get started by discarding old things & earn right from the convenience of your phone!
                    </div>
                </div>
                <div className="banner-image">
                    <img src="src/pages/ProfilePage/img/banner-image.png" alt="banner-image" />
                </div>
            </div>
            <div className="spacing"></div>
        </div>
        <div className="nav-bar">
            <div className="item">
                <div className="item-logo">
                    <img src="src/pages/ProfilePage/img/nav/home.png" alt="home" />
                </div>
                <div className="item-text">
                    Home
                </div>
            </div>
            <div className="item">
                <div className="item-logo">
                    <img src="src/pages/ProfilePage/img/nav/schedule.png" alt="home" />
                </div>
                <div className="item-text">
                    Schedule
                </div>
            </div>
            <div className="item">
                <div className="item-logo">
                    <img src="src/pages/ProfilePage/img/nav/map.png" alt="home" />
                </div>
                <div className="item-text">
                    Maps
                </div>
            </div>
            <div className="item">
                <div className="item-logo">
                    <img src="src/pages/ProfilePage/img/nav/pickup.png" alt="home" />
                </div>
                <div className="item-text">
                    Pickups
                </div>
            </div>
            <div className="item">
                <div className="item-logo">
                    <img src="src/pages/ProfilePage/img/nav/profile.png" alt="home" />
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
