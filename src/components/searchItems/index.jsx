import React, { Component } from "react";
import { Container } from "react-bootstrap";
import {Link} from 'react-router-dom'
import "../landingPage/style.css";

export default class popularRecipe extends Component {
  
  render() {
    const { id_recipe, title, img } = this.props
    console.log(this.props)
    return (
      <>

        <ul className="galery">
          <Link to={{
            pathname: `/recipe/${id_recipe}`
          }}>
            <li>
              <img
                className="feed-food"
                src={'http://127.0.0.1:8000' + img}
                alt=""
              />
              <div className="text-block">
                <h4>
                  {title}
                </h4>
              </div>
            </li>
          </Link>
        </ul>
      </>
    );
  }
}