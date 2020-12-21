import React, { Component } from 'react';
import { InputGroup, Navbar, FormControl, Modal, Button, Form, Col, Row, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class navbar extends Component {
    render() {
        return (
            <Navbar fixed="top" variant="light" bg="white">
                <div className="d-flex flex-row justify-content-around">
                    <div className="row">
                            <Nav className="mr-auto ml-5">
                                <Nav.Link href="#home" style={{fontWeight: '500', fontSize:'20px'}}>Home</Nav.Link>
                                <Nav.Link href="/addRecipe" style={{fontWeight: '500', fontSize:'20px'}}>Add Recipe</Nav.Link>
                                <Nav.Link href="#profile" style={{fontWeight: '500', fontSize:'20px'}}>Profile</Nav.Link>
                            </Nav>
                    </div>
                </div>
            </Navbar>
        );
    }
}

export default navbar;