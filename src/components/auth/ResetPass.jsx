import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";
import { Logo } from "../../assets";
import { Form, Button } from "react-bootstrap";
import './style.css'

export default class ResetPass extends Component {
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
                    <Form.Label>Create New Password</Form.Label>
                    <Form.Control
                    className="shadow"
                    type="password"
                    name="password"
                    placeholder=""
                    />
                </Form.Group>
    
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                    className="shadow"
                    type="password"
                    name="password_conf"
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
                    <Link to="/login">
                        <Button
                            type="submit"
                            style={{
                            width: "100%",
                            backgroundColor: "#EFC81A",
                            padding: "15px",
                            height: "55px"
                            }}
                            onClick={this.handleSubmit}
                        >
                            Reset Password
                        </Button>
                    </Link>
                </Form>
            </div>
            </div>
            <div className="right-content">
            <div className="box-form-right-side">
                <Form className="my-form-right w-75" style={{marginTop: "300px"}}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Create New Password</Form.Label>
                    <Form.Control
                    className="shadow"
                    type="password"
                    name="password"
                    placeholder=""
                    required
                    />
                </Form.Group>
    
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                    className="shadow"
                    type="password"
                    name="password_conf"
                    placeholder=""
                    required
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                    type="checkbox"
                    label=" I agree terms and condition"
                    style={{ fontSize: "13px" }}
                    />
                </Form.Group>
                <Link to="/login">
                        <Button
                            type="submit"
                            style={{
                            width: "100%",
                            backgroundColor: "#EFC81A",
                            padding: "15px",
                            height: "55px"
                            }}
                            onClick={this.handleSubmit}
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
