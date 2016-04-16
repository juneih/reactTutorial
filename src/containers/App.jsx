import { connect } from 'react-redux';
import React from 'react';
import TweetFeed from '../components/TweetFeed.jsx';

let App =  (props) => {
	
	return (<TweetFeed tweets={props.tweets} />);
}

let mapStateToProps = (state)=> {
  return {
	tweets: state
  }
}
export default connect(mapStateToProps)(App);

