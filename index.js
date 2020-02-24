// import 'react-native-gesture-handler';


import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './src/store/configureStore';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('Nyros', () => RNRedux);
