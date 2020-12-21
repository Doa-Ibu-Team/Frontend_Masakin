import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class popularForYou extends Component {
  render() {
    return (
      <>
        <Container>
          <h3 className="session-tag md-session-tag mt-n3">
            Popular For You !
          </h3>
        </Container>
        <Row>
          <Col md={6} className="container-content">
            <div className="border-img">
              <img
                src="https://res.cloudinary.com/zada/image/upload/v1608472385/img-title_hsr2uf.png"
                className="img-content rounded"
                alt=""
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="pr-5 media-small-pop">
              <h3 className="title-recomen">
                Healthy Bone Broth Ramen (Quick & Easy)
              </h3>
              <div className="line"></div>
              <p className="desc-content">
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <Link to="" className="button-content rounded-lg text-white mt-5">
                Learn More
              </Link>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}
