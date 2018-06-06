import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class Main extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAcwM6iSY7F871C9PtvHg_M6ZXdfpE3iG0',
    authDomain: 'ogrencikayit-c50b7.firebaseapp.com',
    databaseURL: 'https://ogrencikayit-c50b7.firebaseio.com',
    projectId: 'ogrencikayit-c50b7',
    storageBucket: 'ogrencikayit-c50b7.appspot.com',
    messagingSenderId: '351180950430'
  });
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default Main;
