import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Home/Main';
import Trending from './components/Home/Trending';
import TvMain from './components/Tv/TvMain';
import Shows from './components/Tv/Shows';
import './App.css'

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Main />
          <Trending />
        </Route>
        <Route path='/movies' exact>
        </Route>
        <Route path='/tv' exact>
          <TvMain />
          <Shows />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;