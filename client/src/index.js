import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { Provider  } from 'react-redux';
import { createStore ,applyMiddleware ,compose, combineReducers} from 'redux'
import  thunk from 'redux-thunk'
import Reducers from './reducers';
import {persistor } from './reducers/store'
import { PersistGate } from 'redux-persist/integration/react';
import {store1} from './reducers/store'




 const store = createStore(  Reducers,compose(applyMiddleware(thunk)))
 
 


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(


  <Provider store={store}>
    <Provider store={store1}>
    
    
  <PersistGate loading={null} persistor={persistor}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </PersistGate>
  </Provider>
  </Provider>

  

  

  
);

