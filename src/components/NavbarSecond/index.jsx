import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faPlus, faHome } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

import "./style.css";

export default class Navbarsnd extends Component {
    render() {
        return (
            <header>
                <Navbar className="bg-light nav-poss">
                    <Container>
                        <Nav className="mr-auto">
                            <Nav.Link href="/" className="font-nav"><FontAwesomeIcon icon={faHome} className="mr-2 text-dark icon-lg" /> Home</Nav.Link>
                            <Nav.Link href="#features" className="font-nav"><FontAwesomeIcon icon={faPlus} className="mr-2 text-dark icon-lg" /> Add Recipe</Nav.Link>
                            <Nav.Link href="/profile" className="font-nav"><FontAwesomeIcon icon={faUserCircle} className="mr-2 text-dark icon-lg" /> Profile</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        );
    }
}