import "./CategoryPage.css"
import { IonPage } from "@ionic/react";

const CategoryPage: React.FC = () => {
  return (
    <IonPage className="ion-page">
      <div className="container">
            <div className="back-btn">Back</div>
            
            <div className="heading">Select Category</div>
            <div className="sub-heading">Bulk & Mix E-Waste</div>
            <div className="bulk-image-container">
                <img src="src/pages/CategoryPage/img/blank-image.png" alt="blank-image" />
            </div>
            
            <div className="weight-container">
                <div className="weight-text">Weight (kgs)</div>
                <div className="weight-value">
                    <select name="weight-selector" id="weight-selector" className="weight-selector">
                        <option value="1 Kg">1 Kg</option>
                        <option value="2 Kgs">2 Kgs</option>
                        <option value="3 Kgs">3 Kgs</option>
                        <option value="4 Kgs">4 Kgs</option>
                    </select>
                </div>
            </div>
            
            <button className="select-vendor-btn">Select Vendor</button>

            <div className="sub-heading">Large Appliance</div>
            <div className="large-appliance-image-container">
                <div className="left-container">
                    <img src="src/pages/CategoryPage/img/360.png" alt="360-icon" />
                </div>
                <div className="right-container">
                    <img src="src/pages/CategoryPage/img/blank-image.png" alt="blank-image" />
                    <img src="src/pages/CategoryPage/img/blank-image.png" alt="blank-image" />
                    <img src="src/pages/CategoryPage/img/blank-image.png" alt="blank-image" />
                    <img src="src/pages/CategoryPage/img/blank-image.png" alt="blank-image" />
                </div>
            </div>

            <div className="material-container">
                <div className="material-container-left">
                    <div className="title">Material Type</div>
                    <div className="value">
                        <select name="large-appliance-selector" id="large-appliance-selector" className="large-appliance-selector">
                            <option value="android">Mobile Phone</option>
                            <option value="tablet">Tablet</option>
                            <option value="laptop">Laptop</option>
                            <option value="computer">Computer</option>
                        </select>
                    </div>
                </div>
                <div className="material-container-left">
                    <div className="title">Brand</div>
                    <div className="value">
                        <select name="large-appliance-selector" id="large-appliance-selector" className="large-appliance-selector">
                            <option value="samsung">Samsung</option>
                            <option value="oneplus">OnePlus</option>
                            <option value="realme">Realme</option>
                        </select>
                    </div>
                </div>
            </div>

            <button className="select-vendor-btn">Select Vendor</button>

            <div className="spacing"></div>
        </div>
        <div className="nav-bar">
            <div className="item">
                <div className="item-logo">
                    <img src="src/pages/CategoryPage/img/nav/home.png" alt="home" />
                </div>
                <div className="item-text">
                    Home
                </div>
            </div>
            <div className="item">
                <div className="item-logo">
                    <img src="src/pages/CategoryPage/img/nav/schedule.png" alt="home" />
                </div>
                <div className="item-text">
                    Schedule
                </div>
            </div>
            <div className="item">
                <div className="item-logo">
                    <img src="src/pages/CategoryPage/img/nav/map.png" alt="home" />
                </div>
                <div className="item-text">
                    Maps
                </div>
            </div>
            <div className="item">
                <div className="item-logo">
                    <img src="src/pages/CategoryPage/img/nav/pickup.png" alt="home" />
                </div>
                <div className="item-text">
                    Pickups
                </div>
            </div>
            <div className="item">
                <div className="item-logo">
                    <img src="src/pages/CategoryPage/img/nav/profile.png" alt="home" />
                </div>
                <div className="item-text">
                    Profile
                </div>
            </div>
        </div>
    </IonPage>
  );
};

export default CategoryPage;
