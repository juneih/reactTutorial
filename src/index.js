import {createStore} from 'redux';
import React from 'react';
import { render } from 'react-dom';
import  App from './containers/App.jsx';
import reducer from './reducers/tweets';


let store = createStore(reducer);


const ws = new WebSocket('ws://twitterws.herokuapp.com');
const MAX_TWEETS = 10;

ws.onmessage = ms => {
  const tweet = JSON.parse(ms.data);
  if (store.getState().length < MAX_TWEETS) {
	// add new tweet here by dispatching action
	store.dispatch({ type: 'TWEET_REEIVED', newTweet: tweet});
  }
};

let MyApp = () => {
	render(<App tweets={store.getState()} />, document.querySelector('#app'));
}

store.subscribe(MyApp, document.querySelector('#app'));


