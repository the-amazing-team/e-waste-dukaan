import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import GettingStartedPage from './pages/GettingStartedPage/GettingStartedPage';
import LoginSelectorPage from './pages/LoginSelectorPage/LoginSelectorPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

/* Core CSS required for Ionic components to work properly */
// import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/getting-started-page">
          <GettingStartedPage />
        </Route>
        <Route exact path="/login-selector-page">
          <LoginSelectorPage />
        </Route>
        <Route exact path="/login-page">
          <LoginPage />
        </Route>
        <Route exact path="/register-page">
          <RegisterPage />
        </Route>
        <Route exact path="/home-page">
          <HomePage />
        </Route>
        <Route exact path="/profile-page">
          <ProfilePage />
        </Route>
        <Route exact path="/">
          <Redirect to="/getting-started-page" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
