import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets";
import { Form, Button } from "react-bootstrap";
import './style.css'

export default function Login() {
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
            <h3 className="text-logo mt-4">Mama recipe</h3>
          </div>
          <div className="box-form-left">
            <div
              style={{
                textAlign: "center",
                marginTop: "550px",
                fontFamily: "Inter",
              }}
            >
              <h4 style={{ color: "#EFC81A" }}>Welcome </h4>
              <p>Login into your Existing account</p>
            </div>

            <Form className="my-form">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="shadow"
                  type="email"
                  placeholder="examplexxx@gmail.com"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="shadow"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label=" I agree terms and condition"
                  style={{ fontSize: "13px" }}
                />
              </Form.Group>
              <Button
                type="submit"
                style={{
                  width: "100%",
                  backgroundColor: "#EFC81A",
                  padding: "15px",
                  height: "20px"
                }}
              >
                Login
              </Button>
              <Link to="/forgot-password" style={{ color: "#696F79" }}>
                <span
                  style={{
                    float: "right",
                    marginTop: "10px",
                    fontSize: "14px",
                  }}
                >
                  Forgot Password?
                </span>
              </Link>
              <div className="create-acc-left">
                <p style={{ width: "120px", display: "inline-block" }}>
                  Don't Have account?{" "}
                </p>
                <Link
                  to="/register"
                  style={{ color: "#EFC81A", display: "inline-block" }}
                >
                  Sign Up
                </Link>
              </div>
            </Form>
          </div>
        </div>
        <div className="right-content">
          <div className="box-form-right-side">
            <div style={{ textAlign: "center", marginTop: "170px" }}>
              <h4 style={{ color: "#EFC81A" }}>Welcome </h4>
              <p>Login into your Existing account</p>
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

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="shadow"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label=" I agree terms and condition"
                  style={{ fontSize: "13px" }}
                />
              </Form.Group>
              <Button
                type="submit"
                style={{
                  width: "100%",
                  backgroundColor: "#EFC81A",
                  padding: "15px",
                }}
              >
                Login
              </Button>
              <Link to="/forgot-password" style={{ color: "#696F79" }}>
                <span
                  style={{
                    float: "right",
                    marginTop: "10px",
                    fontSize: "14px",
                  }}
                >
                  Forgot Password?
                </span>
              </Link>
            </Form>
            <div className="create-acc">
              <p
                style={{
                  width: "350px",
                  fontSize: "14px",
                  marginTop: "30px",
                  textAlign: "center",
                  display: "inline",
                }}
              >
                Don't Have account?{" "}
              </p>
              <Link
                to="/register"
                style={{ color: "#EFC81A", display: "inline" }}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
