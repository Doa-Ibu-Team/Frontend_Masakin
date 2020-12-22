import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import css from "./Header.module.css";

class navbar extends Component {
    render() {
        return (
            <header>
                {/* NAVBAR */}
                <div className='navbar navbar-expand-lg'>
                    <div className='container'>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                            <ul className={`navbar-nav mb-2 mt-4 mb-lg-0 ${css.MainNav}`}>
                                <li className='nav-item'>
                                    <a
                                        className='nav-link active'
                                        aria-current='page'
                                        href='#home'
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#add'>
                                        Add Recipe
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#profile'>
                                        Profile
                                    </a>
                                </li>
                            </ul>
                            <ul className={`navbar-nav mb-2 mt-4 ms-auto mb-lg-0 ${css.Auth}`}>
                                <li className='nav-item' onClick={() => this.props.history.push('/login')}>
                                    <a
                                        className='nav-link'
                                        href=''
                                        tabindex='-1'
                                        aria-disabled='true'
                                    >
                                        <i className='fas fa-user-circle me-2'></i>
                                    Login
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default navbar;