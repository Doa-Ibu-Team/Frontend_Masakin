import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";
import { Logo } from "../../assets";
import { Form, Button } from "react-bootstrap";
import swal from 'sweetalert'
import './style.css'
import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

export default class ResetPass extends Component {
    state = {
        password: '',
        pasword_conf: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.password != this.password_conf) {
            swal('password tidak sama')
        }
        const newPassword = {
            new_password: this.password
        }
        axios.patch(`${baseUrl}${localStorage.getItem('linkReset')}${localStorage.getItem('tokenForgot')}`, newPassword)
            .then(({ data }) => {
                console.log(data)
                swal(data.message)
                localStorage.removeItem('linkReset')
                localStorage.removeItem('tokenForgot')
                localStorage.removeItem('email')
            }).catch((error) => {
                console.log('aaa')
                console.log(error)
            })
    }

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
                            <Form className="my-form" style={{ marginTop: "550px" }}>
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
                                {/* <Link to="/login"> */}
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
                                {/* </Link> */}
                            </Form>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="box-form-right-side">
                            <Form className="my-form-right w-75" style={{ marginTop: "300px" }}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Create New Password</Form.Label>
                                    <Form.Control
                                        className="shadow"
                                        type="password"
                                        name="password"
                                        placeholder=""
                                        required
                                        onChange={(e) => (this.password = e.target.value)}
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
                                        onChange={(e) => (this.password_conf = e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check
                                        type="checkbox"
                                        label=" I agree terms and condition"
                                        style={{ fontSize: "13px" }}
                                    />
                                </Form.Group>
                                {/* <Link to="/login"> */}
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
                                {/* </Link> */}
                            </Form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
