import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

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
    const { popularRecipes } = this.state;

    return (
      <>
        <Container>
          <Container>
            <h3 className="session-tag gap-content">Popular Recipe</h3>
          </Container>

          <ul className="galery">
            {popularRecipes &&
              popularRecipes.map(({ id_recipe, title, img, id }) => {
                return (
                  <Link to={{ pathname: `recipe/${id_recipe}` }}>
                    <li key={id}>
                      <img
                        className="feed-food"
                        src={baseUrl/ + img}
                        alt=""
                      />
                      <div className="text-block">
                        <h4>
                          {title} <br></br>
                        </h4>
                      </div>
                    </li>
                  </Link>
                );
              })}
          </ul>
        </Container>
      </>
    );
  }
}
