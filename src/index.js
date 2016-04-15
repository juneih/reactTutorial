import {createStore} from 'redux';
import React from 'react';
import { render } from 'react-dom';
import  Tweet from './components/Tweet.jsx';
import MyTweet from './example-tweet';

function reducer (state={tweets: [MyTweet]}, action){
	if (action.type === 'TWEET_REEIVED'){
		state = {...state, tweets: [action.newTweet].concat(state.tweets) };
		console.log('test');
	}

	return state;
}

let store = createStore(reducer);


const ws = new WebSocket('ws://twitterws.herokuapp.com');
const MAX_TWEETS = 1000;

ws.onmessage = ms => {
  const tweet = JSON.parse(ms.data);
  if (store.getState().tweets.length < MAX_TWEETS) {
	// add new tweet here by dispatching action
	store.dispatch({ type: 'TWEET_REEIVED', newTweet: tweet});
  }
};

//document.addEventListener('click', () => store.dispatch({ type: 'TWEET_REEIVED', tweet: MyTweet}));



let TweetComponent = () => {
	render(<Tweet tweet={store.getState().tweets.pop()} />, document.querySelector('#app'));
}

store.subscribe(TweetComponent, document.querySelector('#app'));

//TweetComponent({tweet: MyTweet});

