import React, { Component } from 'react'
import './style.css'
import { Logo } from '../../assets'
import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default class ForgotPass extends Component {
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
          <Form className="my-form">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="shadow"
                  type="email"
                  placeholder="examplexxx@gmail.com"
                />
              </Form.Group>
              <Link to="/login">
                <Button
                    type="submit"
                    style={{
                    width: "100%",
                    backgroundColor: "#EFC81A",
                    padding: "15px",
                    }}
                >
            
                    Send E-mail
                </Button>
              </Link>
            </Form>
          </div>
        </div>
        <div className="right-content">
          <div className="box-form-right-side">
            <div style={{ textAlign: "center", marginTop: "170px" }}>
              <h4 style={{ color: "#EFC81A" }}>Forgot Password ? </h4>
              <p style={{ width: "50%", marginLeft: "25%" }}>We just need your registered e-mail address to send your password resend</p>
            </div>
            <Form className="my-form-right w-75">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="shadow"
                  type="email"
                  placeholder="examplexxx@gmail.com"
                />
              </Form.Group>
              <Link to="/login">
                <Button
                    type="submit"
                    style={{
                    width: "100%",
                    backgroundColor: "#EFC81A",
                    padding: "15px",
                    }}
                >
            
                    Send E-mail
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
