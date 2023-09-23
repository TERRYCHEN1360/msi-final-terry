import React from 'react';
// import Header from "./Header"
import Drawer from "./drawer"
import {connect} from "react-redux";
import Login from "./login"


class Apps extends React.Component{

    render(){
        return(
            <React.Fragment>
                {/*<Header/>*/}
                {(!this.props.login || this.props.login.success === false) && <Login/>}
                {this.props.login.success === true && <Drawer c = {this.props.children}/>}
                {/*{this.props.children}*/}
            </React.Fragment>
        )
    }
}

function mapStateToProps({login}) {
    return {login};
}

export default connect(mapStateToProps)(Apps)


