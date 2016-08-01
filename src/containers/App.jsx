import { connect } from 'react-redux';
import React from 'react';
import TweetFeed from '../components/TweetFeed.jsx';
import Link from '../containers/Link.jsx';

let App =  (props) => {

    var content = <div>Whaaaaat!</div>;
    console.log('props.route is', props.route);
    if ( props.route == "/feed" ){
        content = <TweetFeed tweets={props.tweets} />;
    }

    return (<div className="app-header">
                <div>
                    <h1 className="heading">Twitter redux stuff</h1>
                    <div className="menu-item">
                        <Link to="/" className="img img-icon img-icon-dashboard"/>
                        <Link to="/feed" className="img img-icon img-icon-settings"/>
                    </div>
                    {content}
                </div>
            </div>
           );
}

let mapStateToProps = (state)=> {
    console.log('mapstatetoprops state in app.jsx',state);
    return {
        tweets: state.tweets,
        route: state.route
    }
}
export default connect(mapStateToProps)(App);

