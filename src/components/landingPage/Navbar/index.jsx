import React, { Component } from "react";
import { Navbar, Nav, Form, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faPlus, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./style.css";

export default class Navbars extends Component {

    state = {
        className: "bg-nav nav-poss"
      };
    
      listenScrollEvent = e => {
        if (window.scrollY > 50) {
          this.setState({ className : "bg-nav nav-poss"});
        } else {
          this.setState({ className: "transparent nav-poss" });
        }
      };
    
      componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent);
      }

    render() {
        return (
            <header>
                <Navbar className= {this.state.className}>
                    <Container>
                        <Nav className="mr-auto">
                            <Nav.Link href="/" className="font-nav"><FontAwesomeIcon icon={faHome} className="mr-2 text-dark icon-lg" /> Home</Nav.Link>
                            <Nav.Link href="#features" className="font-nav"><FontAwesomeIcon icon={faPlus} className="mr-2 text-dark icon-lg" /> Add Recipe</Nav.Link>
                            <Nav.Link href="/profile" className="font-nav"><FontAwesomeIcon icon={faUserCircle} className="mr-2 text-dark icon-lg" /> Profile</Nav.Link>
                        </Nav>
                        <Form inline className="hide-log">
                            <FontAwesomeIcon icon={faUserCircle} className="mr-2 text-white" />
                            <Link href="" className="text-white" >Login</Link>
                        </Form>
                    </Container>
                </Navbar>
            </header>
        );
    }
}