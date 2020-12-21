import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./style.css";

export default class popularRecipe extends Component {
  render() {
    return (
      <>
        <Container>
          <h3 className="session-tag gap-content">Popular Recipe</h3>
        </Container>
        <ul className="galery">
          <li>
            <img
              className="feed-food"
              src="https://res.cloudinary.com/zada/image/upload/v1608472385/img-title_hsr2uf.png"
              alt=""
            />
            <div className="text-block">
              <h4>
                Chiken <br></br> Kare
              </h4>
            </div>
          </li>
          <li>
            <img
              className="feed-food"
              src="https://res.cloudinary.com/zada/image/upload/v1608472385/img-title_hsr2uf.png"
              alt=""
            />
            <div className="text-block">
              <h4>
                Bomb<br></br> Chicken
              </h4>
            </div>
          </li>
          <li>
            <img
              className="feed-food"
              src="https://res.cloudinary.com/zada/image/upload/v1608472385/img-title_hsr2uf.png"
              alt=""
            />
            <div className="text-block">
              <h4>
                Banana<br></br> Smothie Pop
              </h4>
            </div>
          </li>
          <li>
            <img
              className="feed-food"
              src="https://res.cloudinary.com/zada/image/upload/v1608472385/img-title_hsr2uf.png"
              alt=""
            />
            <div className="text-block">
              <h4>
                Coffe Lava<br></br> Cake
              </h4>
            </div>
          </li>
          <li>
            <img
              className="feed-food"
              src="https://res.cloudinary.com/zada/image/upload/v1608472385/img-title_hsr2uf.png"
              alt=""
            />
            <div className="text-block">
              <h4>
                Sugar<br></br> Salmon
              </h4>
            </div>
          </li>
          <li>
            <img
              className="feed-food"
              src="https://res.cloudinary.com/zada/image/upload/v1608472385/img-title_hsr2uf.png"
              alt=""
            />
            <div className="text-block">
              <h4>
                Indian<br></br> Salad
              </h4>
            </div>
          </li>
        </ul>
      </>
    );
  }
}
