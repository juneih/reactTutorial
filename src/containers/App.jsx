import { connect } from 'react-redux';
import React from 'react';
import TweetFeed from '../components/TweetFeed.jsx';
import Link from '../containers/Link.jsx';

let App =  (props) => {

    return (<div className="app-header">
                <div>
                    <h1 className="heading">Twitter redux stuff</h1>
                    <div className="menu-item">
                        <Link to="/" className="img img-icon img-icon-dashboard"/>
                        <Link to="/feed" className="img img-icon img-icon-settings"/>
                    </div>
                </div>
                <TweetFeed tweets={props.tweets} />
            </div>
           );
}

let mapStateToProps = (state)=> {
    console.log('mapstatetoprops state in app.jsx',state);
    return {
        tweets: state.tweets
    }
}
export default connect(mapStateToProps)(App);

