import React, { Component } from "react";
import { Row, Col, InputGroup, FormControl, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

export default class search extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={8} className="container-content-left">
            <h3 className="title-content">
              Discover Recipe <br /> & Delicious Food
            </h3>
            <InputGroup className="input-search input-search-field mt-3">
              <FormControl
                className="rounded-pill"
                placeholder="search restaurant, food"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append className="mr-2">
                <FontAwesomeIcon className="icon-search" icon={faSearch} />
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col md={4}>
            <div className="bg-content">
              <img
                src="https://res.cloudinary.com/zada/image/upload/v1608472385/img-title_hsr2uf.png"
                className="img-title rounded"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
