import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// Importing Components
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import NotFound from './components/pages/NotFound';
import Alert from './components/layout/Alert';
import setAuthToken from './utils/setAuthToken';
// Importing All States
import NavbarState from './context/navbar/NavbarState';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
// CSS
import './App.css';

if(localStorage.token) {
  setAuthToken(localStorage.token);
};

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <NavbarState>
          <AlertState>
            <Router>
              <Fragment>
                <Navbar/>
                <Alert/>
                <div className="container">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </Fragment>
            </Router>
          </AlertState>
        </NavbarState>
      </ContactState>
    </AuthState>
  );
}

export default App;
