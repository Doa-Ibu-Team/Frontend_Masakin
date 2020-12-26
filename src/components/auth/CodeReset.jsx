import React, { Component } from 'react'
import './style.css'
import { Logo } from '../../assets'
import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default class CodeReset extends Component {
    render() {
        return (
    <>
      <div className="main">
        <div className="left-content">
          <div className="rectangle-overlay"></div>
          <div className="logo-login">
            <img
              className="img-login"
              src={Logo}
              alt="ini logo pak"
            />
            <h3 className="text-logo mt-4 ml-4">Mama recipe</h3>
          </div>
          <div className="box-form-left">
          <Form className="my-form" style={{marginTop: "550px"}}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="shadow"
                  type="email"
                  placeholder=""
                />
              </Form.Group>
              <Link to="/reset-password">
                <Button
                    type="submit"
                    style={{
                    width: "100%",
                    backgroundColor: "#EFC81A",
                    padding: "15px",
                    }}
                >
            
                    Reset Password
                </Button>
              </Link>
            </Form>
          </div>
        </div>
        <div className="right-content">
          <div className="box-form-right-side">
            <Form className="my-form-right w-75" style={{marginTop: "340px"}}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Code 6 Digit</Form.Label>
                <Form.Control
                  className="shadow"
                  type="text"
                  placeholder=""
                />
              </Form.Group>
              <Link to="/reset-password">
                <Button
                    type="submit"
                    style={{
                    width: "100%",
                    backgroundColor: "#EFC81A",
                    padding: "15px",
                    }}
                >
            
                    Reset Password
                </Button>
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </>
        )
    }
}
