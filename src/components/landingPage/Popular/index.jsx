import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

import "./style.css";

const baseUrl = process.env.REACT_APP_BASE_URL;

export default class PopularRecipe extends Component {
  state = {
    popularRecipes: [],
  };

  getPopularRecipes = () => {
    axios
      .get(baseUrl + `/recipe/views`)
      .then((res) => {
        const popularRecipes = res.data.data;
        // console.log("kontol "+{popularRecipes});
        this.setState({ popularRecipes });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount = () => {
    this.getPopularRecipes();
  };

  render() {
    return (
      <>
        <Container fluid>
          <Container>
            <h3 className="session-tag gap-content">Popular Recipe</h3>
          </Container>

          <ul className="galery">
            {this.state.popularRecipes.map((popularRecipe, id) => {
              return (
                <li key={id}>
                  <img
                    className="feed-food"
                    src="https://res.cloudinary.com/zada/image/upload/v1608472385/img-title_hsr2uf.png"
                    alt=""
                  />
                  <div className="text-block">
                    <h4>
                      {popularRecipe.title} <br></br>
                    </h4>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </>
    );
  }
}
