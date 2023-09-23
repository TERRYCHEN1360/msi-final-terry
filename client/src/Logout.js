import React, {Component} from 'react';
import {logout} from "./action/login.action";
import {connect} from 'react-redux';
import {outTime} from "./action/employee.action";

class Logout extends Component {

    componentDidMount(){
        this.handleLogout();
    }


    handleLogout = () => {
        console.log(this.props.login)
            let user = {
                id:this.props.login.user.id
            }

        this.props.outTime(user).then( () =>{
            this.props.logout((res) => {
                if (res.data && res.data.success) {
                    console.log(res)
                    localStorage.removeItem('user');
                    this.props.history.push('/login');
                }
            });
        })
    }

    render() {
        return (
           <p></p>
        );
    }

}

function mapStateToProps({login}) {
    return {login};
}

export default connect(mapStateToProps, {outTime,logout})(Logout);