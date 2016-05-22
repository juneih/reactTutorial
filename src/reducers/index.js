import TweetReducer from './tweets.js';
import routeReducer from './route.js';
import {combineReducers} from 'redux';
const initialState = {
      tweets: [],
      route: ''
};
function rootReducer(state = initialState, action) {
     return  {
              tweets: TweetReducer(state.tweets, action),
              route: routeReducer(state.route, action)
     };
}

/*const rootReducer = combineReducers({
        tweets: TweetReducer,
        route:  routeReducer
    });*/

export default rootReducer;
