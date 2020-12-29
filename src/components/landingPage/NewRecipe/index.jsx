import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import "./style.css";

const baseUrl = process.env.REACT_APP_BASE_URL;

export default class NewRecipe extends Component {
  state = {
    newRecipes: [],
  };

  getNewRecipes = () => {
    axios
      .get(baseUrl + `/recipe/new`)
      .then((res) => {
        const newRecipes = res.data.data;
        this.setState({ newRecipes });
        console.log("kontol " + newRecipes);
      })
      .catch((err) => console.log(err));
  };

  componentDidMount = () => {
    this.getNewRecipes();
  };

  render() {
    return (
      <>
        <Container fluid>
          <Container>
            <h3 className="session-tag mt-5">New Recipe</h3>
          </Container>
          {this.state.newRecipes.map((newRecipe, id) => {
            return (
              <Row>
                <Col md={6} className="container-content">
                  <div className="rectangle">
                    <img
                      src="https://res.cloudinary.com/zada/image/upload/v1608472385/img-title_hsr2uf.png"
                      className="img-content-recipe img-fluid rounded"
                      alt=""
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="media-small pr-5">
                    <h3 className="title-recomen">
                      {newRecipe.title}
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
