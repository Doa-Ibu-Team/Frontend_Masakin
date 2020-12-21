import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import { sideImg, Logo } from '../../assets'
import { Form, Button } from "react-bootstrap";


export default function Login() {
    return (
        <div className="box-main">
            <div className="side-box">
                <div className="box-transparent"></div>
                <img className="side-img" src={sideImg} alt="ini logo back" />
                <img className="logo" src={Logo} alt="ini logo back" /><span className="text-brand">Mama Recipe.</span>
            </div>
            <div className="box-right">
                <div className="box-form">
                    <div style={{textAlign: "center", marginTop: "550px", fontFamily: "Inter"}}>
                        <h4 style={{color: "#EFC81A"}}>Welcome </h4>
                        <p>Login into your Existing account</p>
                    </div>

                    <Form className="my-form">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="examplexxx@gmail.com" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label=" I agree terms and condition" style={{fontSize: "13px"}} />
                        </Form.Group>
                        <Button type="submit" style={{width: "100%", backgroundColor: "#EFC81A", padding: "15px"}}>
                            Login
                        </Button>
                        <Link to="/forgot-password" style={{color: "#696F79"}}>
                            <span style={{float: "right", marginTop: "10px", fontSize: "14px"}}>Forgot Password?</span>
                        </Link>
                    </Form>
                </div>
                <p style={{fontSize: "14px", transform: "translate(90%, 1100px)", textAlign: "center"}}>Don't Have account? <Link to="/register" style={{color: "#EFC81A"}}>Sign Up</Link> </p>
            </div>  
        </div>
    )
}
