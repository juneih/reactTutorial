import React from 'react';
import {connect} from 'react-redux';

class Link extends React.Component {
    render () {
        const {to, dispatch, className} = this.props;
        const action = {
            type: 'ROUTE_CHANGED',
            route: to
        };
        return ( <a className={className}
                    href={'#$to'}
                    onClick={dispatch(action)}>
                </a> )
    }
}

export default connect()(Link);
