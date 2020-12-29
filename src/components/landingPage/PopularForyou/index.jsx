import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";


import "./style.css";

const baseUrl = process.env.REACT_APP_BASE_URL;

export default class PopularForYou extends Component {

  // state = {
  //   popularRecipes: [],
  // };

  // getPopularRecipes = () => {
  //   axios
  //     .get(baseUrl + `/recipe/views`)
  //     .then((res) => {
  //       const popularRecipes = res.data.data;
  //       // console.log("kontol "+{popularRecipes});
  //       this.setState({ popularRecipes });
  //     })
  //     .catch((err) => console.log(err));
  // };

  // componentDidMount = () => {
  //   this.getPopularRecipes();
  // };

  render() {
    return (
      <>
        <Container fluid>
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
                  className="img-content img-fluid rounded"
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
                  Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen
                  in a hurry? That’s right!
                </p>
                <Link
                  to=""
                  className="button-content rounded-lg text-white mt-5"
                >
                  Learn More
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
