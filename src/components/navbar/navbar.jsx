import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class navbar extends Component {
  render() {
    return (
      <Navbar fixed="top" variant="light" bg="white">
        <div className="d-flex flex-row justify-content-around">
          <div className="row">
            <Nav className="mr-auto ml-5">
              <Link to="/">
                <Nav.Link
                  href="/"
                  style={{ fontWeight: "500", fontSize: "20px" }}
                >
                  Home
                </Nav.Link>
              </Link>
              <Link to="/addRecipe">
                <Nav.Link
                  href="/addRecipe"
                  style={{ fontWeight: "500", fontSize: "20px" }}
                >
                  Add Recipe
                </Nav.Link>
              </Link>
              <Link to="/login">
                <Nav.Link
                  href="/login"
                  style={{ fontWeight: "500", fontSize: "20px" }}
                >
                  Profile
                </Nav.Link>
              </Link>
            </Nav>
          </div>
        </div>
      </Navbar>
    );
  }
}

export default navbar;
