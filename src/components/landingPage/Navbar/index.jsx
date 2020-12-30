import React, { Component } from "react";
import { Navbar, Nav, Form, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faPlus, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios'
import swal from 'sweetalert'
import { setLogout } from '../../../redux/actions/Auth'
import { connect } from "react-redux";

import "./style.css";

const base_url = process.env.REACT_APP_BASE_URL;

const config = {
  headers: {
    "x-access-token": "Bearer " + localStorage.getItem("token"),
  },
};

class Navbars extends Component {

  state = {
    className: "bg-nav nav-poss",
    justRandom: null,
    isLogout: false
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 50) {
      this.setState({ className: "bg-nav nav-poss" });
    } else {
      this.setState({ className: "transparent nav-poss" });
    }
  };
  LogoutBtn = () => {
    this.setState({
      isLogout: true
    })
    console.log('aaaaa')
    const {dispatch} = this.props
    axios.delete(base_url+'/auth/logout/', config)
    .then(({data}) => {
      console.log(data)
      swal('Logout')
      localStorage.removeItem('user_ID')
      localStorage.removeItem('email')
      localStorage.removeItem('name')
      localStorage.removeItem('token') 
      dispatch(setLogout())
      this.setState({
        justRandom: Math.floor()
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    let btnLogin;
    let btnLogout;
    const {auth} = this.props
    if (localStorage.getItem('token')) {
      btnLogin = <> <Link to="/profile" className="text-white" >{localStorage.getItem('name')}</Link>
      </>
    } else {
      btnLogin = (
        <>
          {" "}
          <Link to="/login" className="text-white">
            Login
          </Link>{" "}
        </>
      );
    }
    if (localStorage.getItem('token')) {
      btnLogout = <> {auth.isLogout && <Redirect to="/" />} <button className="btn btn-outline-light" onClick={this.LogoutBtn}>Logout</button> </>
    }
    return (
      <header>
        <Navbar className={this.state.className}>
          <Container>
            <Nav className="mr-auto">
              <Link to="/">
                <div className="nav-link font-nav">
                  <FontAwesomeIcon
                    icon={faHome}
                    className="mr-2 text-dark icon-lg"
                  />{" "}
                  Home
                </div>
              </Link>
              <Link to="/add">
                <div className="nav-link font-nav">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="mr-2 text-dark icon-lg"
                  />{" "}
                  Add Recipe
                </div>
              </Link>
              <Link to="/profile">
                <div className="nav-link font-nav">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="mr-2 text-dark icon-lg"
                  />{" "}
                  Profile
                </div>
              </Link>
            </Nav>
            <Form inline className="hide-log">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="mr-2 text-white"
              />
              {btnLogin}
            </Form>
            {btnLogout}
          </Container>
        </Navbar>
      </header>
    );
  }
}
const mapStateToProps = ({ auth, newState }) => {
  return {
      auth,
      newState
  };
};
export default connect(mapStateToProps)(Navbars)
