import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";


const roles = ['ROLE_ADMIN', 'ROLE_SERVER', 'ROLE_BARTENDER']

class Header extends React.Component{

    render(){
        return (
            <header>
                <nav className="navbar navbar-default navar-light">
                    <ul className="nav navbar-nav">
                        {!this.props.login &&<li className="nav-item">
                            <Link to="/Login">Log in</Link>
                        </li>}
                        <li className="nav-item">
                            <Link to="/Menu">Menu</Link>
                        </li>
                         <li className="nav-item">
                            <Link to="/dinein">Dine In</Link>
                        </li>
                        {this.props.login && roles.includes(this.props.login.user.authorities[0].type)  &&<li className="nav-item">
                            <Link to="/Delivery">Delivery</Link>
                        </li>}
                        {this.props.login && this.props.login.user.authorities[0].type === "ROLE_ADMIN"  &&<li className="nav-item">
                            <Link to="/dailysales">daily sales</Link>
                        </li>}
                        {this.props.login && this.props.login.user.authorities[0].type === "ROLE_ADMIN"  &&<li className="nav-item">
                            <Link to="/register">Add Employee</Link>
                        </li>}
                        <li className="nav-item">
                            <Link to="/logout">Logout</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}
function mapStateToProps({login}) {
    return {login};
}

export default connect(mapStateToProps)(Header)