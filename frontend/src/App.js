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
import SearchMovie from './components/Search/SearchMovie';
import SearchTv from './components/Search/SearchTv';

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
        </Route >
        <Route path='/search'>
          <Switch>
            <Route path='/search/movies'><SearchMovie /></Route>
            <Route path='/search/tvshows'><SearchTv /></Route>
          </Switch>
        </Route>
        <Route path='/account'>

        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;