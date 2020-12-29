import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import "./style.css";

const baseUrl = process.env.REACT_APP_BASE_URL;

export default class PopularForYou extends Component {
  state = {
    popularRecipes: [],
  };

  handlePopular = () => {
    const token = undefined;

    if (token === undefined) {
      axios
      .get(baseUrl + `/recipe/popularforyou`, {
        // headers: {
        //   "x-access-token": "Bearer " + localStorage.getItem("token"),
        // },
      })
      .then((res) => {
        const popularRecipes = res.data.data;
        this.setState({ popularRecipes });
        // console.log("memek "+{popularRecipes});
      })
      .catch((err) => console.log(err));
    } else {
      axios
      .get(baseUrl + `/recipe/popularforyou`, {
        headers: {
          "x-access-token": "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        const popularRecipes = res.data.data;
        this.setState({ popularRecipes });
        // console.log("memek "+{popularRecipes});
      })
      .catch((err) => console.log(err));
    }
  }

  // getPopularRecipes = () => {
  //   axios
  //     .get(baseUrl + `/recipe/popularforyou`, {
  //       headers: {
  //         "x-access-token": "Bearer " + localStorage.getItem("token"),
  //       },
  //     })
  //     .then((res) => {
  //       const popularRecipes = res.data.data;
  //       this.setState({ popularRecipes });
  //       // console.log("memek "+{popularRecipes});
  //     })
  //     .catch((err) => console.log(err));
  // };

  componentDidMount = () => {
    this.handlePopular();
  };

  render() {
    return (
      <>
        <Container fluid>
          <Container>
            <h3 className="session-tag md-session-tag mt-n3">
              Popular For You !
            </h3>
          </Container>
          {this.state.popularRecipes.map((popularRecipe, id) => {
            return (
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
                    {popularRecipe.title}
                    </h3>
                    <div className="line"></div>
                    <p className="desc-content">
                      Quick + Easy Chicken Bone Broth Ramen- Healthy chicken
                      ramen in a hurry? That’s right!
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
            );
          })}
        </Container>
      </>
    );
  }
}
