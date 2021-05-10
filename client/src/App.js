import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// Importing All Pages
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import NotFound from './components/pages/NotFound';
// Importing All Contexts
import NavbarState from './context/navbar/NavbarState';
import ContactState from './context/contact/ContactState';
// CSS
import './App.css';

const App = () => {
  return (
    <ContactState>
      <NavbarState>
        <Router>
          <Fragment>
            <Navbar/>
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
      </NavbarState>
    </ContactState>
  );
}

export default App;
