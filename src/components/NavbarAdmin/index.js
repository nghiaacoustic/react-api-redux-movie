// import { Button } from 'bootstrap';
import React, { Component } from 'react';
import { Link, NavLink, withRouter } from "react-router-dom";
import { actLogout } from "../../containers/AdminTemplate/AuthPage/modules/action"

import { connect } from "react-redux"
 class NavbarAdmin extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    {/* Brand */}
                    <Link className="navbar-brand" to="/admin">Navbar LOGO</Link>
                    {/* Toggler/collapsibe Button */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Navbar links */}
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link" to="/dashboard">DashBoard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/add-user">Add User</NavLink>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-danger" onClick={()=>{this.props.fetchLogout(this.props.history)}}>Log out</button>
                            </li> 
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLogout: (history) => {
            dispatch(actLogout(history));
        }
    }
}

//custom lại connect để bao bọc bởi withRouter
const ConnectedComponent = connect(null, mapDispatchToProps)(NavbarAdmin);

export default withRouter(ConnectedComponent) ;