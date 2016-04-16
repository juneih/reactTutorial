import React from 'react'; 
import Tweet from './Tweet.jsx';

let TweetFeed = (props) => {
	const tweetList = props.tweets.map((tweet) => {
		return <li><Tweet tweet={tweet} /></li>
	});

	return (<ul className="tweetList">
			{tweetList}
		</ul>);

}	

export default TweetFeed;
