import { Provider } from 'react-redux';
import configureStore from './configureStore';
import React from 'react';
import { render } from 'react-dom';
import  App from './containers/App.jsx';
import DevTools from './containers/DevTools';



const store = configureStore();


const ws = new WebSocket('ws://twitterws.herokuapp.com');
const MAX_TWEETS = 10;

ws.onmessage = ms => {
  const tweet = JSON.parse(ms.data);
  if (store.getState().tweets.length < MAX_TWEETS) {
	// add new tweet here by dispatching action
	store.dispatch({ type: 'TWEET_REEIVED', newTweet: tweet});
  }
};


render (
	<Provider store={ store }>
	<div>
		<App />
		<DevTools />
	</div>
</Provider>,
document.querySelector('#app')	
);


