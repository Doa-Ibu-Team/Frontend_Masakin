import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class footer extends Component {
  render() {
    return (
      <footer className="mt-4">
        <h3 className="title-footer text-center">Eat, Cook, Repeat</h3>
        <p className="desc-footer text-center">
          Share your best recipe by uploading here !
        </p>
        <div className="footer-nav text-center">
          <Link to="" className="mr-3 footer-text">
            Product
          </Link>
          <Link to="" className="mr-3 footer-text">
            Company
          </Link>
          <Link to="" className="mr-3 footer-text">
            Learn more
          </Link>
          <Link to="" className="mr-3 footer-text">
            Get in touch
          </Link>
        </div>
      </footer>
    );
  }
}
