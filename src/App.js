import './App.css';
import LandingHomePage from './contents/Home';
import LandingWhatPage from './contents/What';
import { Switch, Route, useLocation } from 'react-router-dom'
import CampaignPage from './contents/CampaignPage';
import Login from './contents/Login';
import Tos from './contents/Tos';
import Contact from './contents/Contact';
import Signup from './contents/Signup';
import AuthProvider from './contexts/AuthContext';
import Profile from './contents/Profile';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './contents/ForgotPassword';
import { useEffect } from 'react';
import Aos from "aos";

function App() {

  const location = useLocation();

  useEffect(() => {
    Aos.init({ duration: 2000})
  })

  return (
    <>
      <AuthProvider>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={LandingHomePage} />
          <Route path="/whatisplaycrowd" component={LandingWhatPage} />
          <Route path="/campaign/:id" component={CampaignPage} />
          <Route path="/tos" component={Tos} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute path="/profile" component={Profile}/>
          {/* <PrivateRoute exact path="/profile" component={Profile} /> */}
        </Switch>
      </AuthProvider>
    </>
  );
}

export default App;
