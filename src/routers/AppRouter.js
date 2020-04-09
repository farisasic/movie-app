// Main App

// React Import
import React from 'react';

// React 3rd Party Components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components Import
import Footer from '../components/Footer';
import Header from '../components/Header';

// Pages Import
import Home from '../components/Home';
import IndividualMovie from '../components/IndividualMovie';
import PageNotFound from '../components/PageNotFound';
import About from '../components/About';
import Favourites from '../components/Favourites';

const AppRouter = () => (
    <Router>
    <div className="wrapper">
      <Header />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/individual-movie"><IndividualMovie /></Route>
          <Route path="/favourites"><Favourites /></Route>
          <Route><PageNotFound /></Route>
        </Switch>
      <Footer />
    </div>
  </Router>
)

export default AppRouter;
