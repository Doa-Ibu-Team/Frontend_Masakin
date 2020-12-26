import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "../landingPage/style.css";

export default class popularRecipe extends Component {
  render() {
    const { id_recipe, title, img } = this.props
    return (
      <>
        
        <ul className="galery">
          <li>
            <img
              className="feed-food"
              src="https://res.cloudinary.com/zada/image/upload/v1608472385/img-title_hsr2uf.png"
              alt=""
            />
            <div className="text-block">
              <h4>
                {title}
              </h4>
            </div>
          </li>
        </ul>
      </>
    );
  }
}