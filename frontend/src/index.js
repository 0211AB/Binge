import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, document.getElementById('root')
)

//MAJOR PROBLEM/LEARNING NUMBER 1
//Since we are fetching data from an API use use effect,we need to use a state isdata and only if it is true,we should use map functions on the data returned otherwise the map functions will be used on undefined objects and hence will give an error.
