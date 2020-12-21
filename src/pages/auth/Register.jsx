import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import { sideImg, Logo } from '../../assets'
import { Form, Button } from "react-bootstrap";

export default function Register() {
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
                        <h4 style={{color: "#EFC81A"}}>Let's Get Started! </h4>
                        <p>Create new account to access new features</p>
                    </div>

                    <Form className="my-form">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email Address *</Form.Label>
                            <Form.Control type="email" placeholder="Enter email address" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="email" placeholder="08xxxxxxxxx" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Create New Password</Form.Label>
                            <Form.Control type="password" placeholder="Create New Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" placeholder="New Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label=" I agree terms and condition" style={{fontSize: "13px"}} />
                        </Form.Group>
                        <Button type="submit" style={{width: "100%", backgroundColor: "#EFC81A", padding: "15px"}}>
                            Register
                        </Button>
                    </Form>
                </div>
                <p style={{fontSize: "14px", transform: "translate(150%, 1330px)", textAlign: "center", fontWeight: "800"}}>Already Have account? <Link to="/login" style={{color: "#EFC81A"}}>Login</Link> </p>
            </div>  
        </div>
    )
}
