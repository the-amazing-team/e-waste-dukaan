import { useState } from "react";
import "./RegisterPage.css";
import { IonPage } from "@ionic/react";

import axios from "axios";

const RegisterPage: React.FC = () => {

  const [form, setForm] = useState({
    fullName: "",
    selectState: "",
    selectCity: "",
    email: "",
    mobileNo: "",
    password: ""
  });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }; 

    const registerUser = async (e) => {
      e.preventDefault();
      console.log("dsasfd")
      try {
        console.log("sadsf")
        const result = await axios.post('http://localhost:3500/register', {
          fullName: form.fullName,
          state: form.selectState,
          city: form.selectCity,
          email: form.email,
          mobile: form.mobileNo,
          password: form.password
        }, {
          headers: {
            'Content-Type':'application/json'
          }

        })
        console.log(result);
      } catch (err) {
        console.log(err);
      }

    }
  
  return (
    <IonPage className="ion-page">
      <div className="container">
        <div className="back-btn">Back</div>
        <div className="logo">
          <img src="src/pages/RegisterPage/img/logo.png" alt="logo" />
        </div>
        <form>
          <input
            name="fullName"
            type="text"
            value={form.fullName}
            onChange={handleChange}
            className="input-field"
            placeholder="Full Name"
          />
          <input
            type="text"
            name="selectState"
            value={form.selectState}
            onChange={handleChange}
            className="input-field"
            placeholder="Select State"
          />
          <input
            type="text"
            name="selectCity"
            value={form.selectCity}
            onChange={handleChange}
            className="input-field"
            placeholder="Select City"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="input-field"
            placeholder="Email"
          />
          <input
            type="number"
            name="mobileNo"
            value={form.mobileNo}
            onChange={handleChange}
            className="input-field"
            placeholder="Mobile No."
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="input-field"
            placeholder="Password"
          />
          <button onClick={(e) => registerUser(e)} className="cta-register-btn">Register</button>
        </form>
        <div className="term-condition-elem">
          <div className="term-logo">
            <img
              src="src/pages/RegisterPage/img/shield-check.png"
              alt="term-condition-logo"
            />
          </div>
          <div className="term-text">Terms and Conditions</div>
        </div>
        <div className="check-options">
          <div className="option">
            <div className="option-logo">
              <img
                src="src/pages/RegisterPage/img/ring-check.png"
                alt="ring-logo"
              />
            </div>
            <div className="option-text">Vendors</div>
          </div>
          <div className="option">
            <div className="option-logo">
              <img
                src="src/pages/RegisterPage/img/ring-check.png"
                alt="ring-logo"
              />
            </div>
            <div className="option-text">Public</div>
          </div>
        </div>
      </div>
    </IonPage>
  );
};

export default RegisterPage;
