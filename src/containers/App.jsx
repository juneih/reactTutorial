import React from 'react';
import Tweet from '../components/Tweet.jsx';

let App =  (props) => {
	
	const tweetList = props.tweets.map((tweet) => {
		return <li><Tweet tweet={tweet} /></li>
	});

	return (<ul className="tweetList">
			{tweetList}
		</ul>);
}

export default App;
