
function reducer (state=[], action){
	if (action.type === 'TWEET_REEIVED'){
		state = [action.newTweet].concat(state);
		console.log('test');
	}

	return state;
}

export default reducer;
