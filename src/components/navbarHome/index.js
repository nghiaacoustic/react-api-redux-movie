import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";

export default class NavbarHome extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    {/* Brand */}
                    <Link className="navbar-brand" to="/">Navbar LOGO</Link>
                    {/* Toggler/collapsibe Button */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Navbar links */}
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/list-movie">List Movie</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/HOC">HOC</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/hooks">Hook</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}
