// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise'; 

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import messagesListReducer from './reducers/messages_list_reducer';
import channelsListReducer from './reducers/channels_list_reducer';

const identityReducer = (state = null) => state;

// State and reducers

const initialState = {
  messagesList: [],
  channelsList: ['général', 'react', 'paris'],
  selectedChannel: 'général',
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
};

const reducers = combineReducers({
  messagesList: messagesListReducer,
  channelsList: identityReducer,
  selectedChannel: channelsListReducer,
  currentUser: identityReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
