import React from 'react';
import {connect} from 'react-redux';

export default function auth(UnprotectedComponent) {

    class ProtectedComponent extends React.Component {

        constructor(props){
            super(props)
            super(props);
            this.state = {};
        }

        static getDerivedStateFromProps(props,state) {
            if (JSON.parse(localStorage.getItem('user'))) {
                return state;
            } else {
                props.history.push('/login'); // redirect user to login page.
                return null;
            }
        }

        render() {
            return <UnprotectedComponent {...this.props} />;
        };
    }

    function mapStateToProps({login}) {
        return {login};
    }

    return connect(mapStateToProps)(ProtectedComponent);
}