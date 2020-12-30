import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const base_url = process.env.REACT_APP_BASE_URL 
export default class popularRecipe extends Component {
  render() {
    const { id_recipe, title, img } = this.props;
    console.log(this.props);
    return (
      <>
        <Container>
          <ul className="galery">
            <Link
              to={{
                pathname: `/recipe/${id_recipe}`,
              }}
            >
              <li>
                <img
                  className="feed-food"
                  src={base_url/ + img}
                  alt=""
                />
                <div className="text-block">
                  <h4>{title}</h4>
                </div>
              </li>
            </Link>
          </ul>
        </Container>
      </>
    );
  }
}
