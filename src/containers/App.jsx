import { connect } from 'react-redux';
import React from 'react';
import TweetFeed from '../components/TweetFeed.jsx';

let App =  (props) => {
	
	return (<TweetFeed tweets={props.tweets} />);
}

let mapStateToProps = (state)=> {
    console.log('mapstatetoprops state in app.jsx',state);
  return {
	tweets: state.tweets
  }
}
export default connect(mapStateToProps)(App);

