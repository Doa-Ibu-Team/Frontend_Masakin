import React from 'react'
import './style.css'
import { sideImg, Logo } from '../../assets'
import { Form, Button } from "react-bootstrap";

export default function ForgotPass() {
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
                        <h4 style={{color: "#EFC81A"}}>Forgot PAssword? </h4>
                        <p>We just Need your registered e-mail address to send your password resend</p>
                    </div>

                    <Form className="my-form">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="examplexxx@gmail.com" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Button type="submit" style={{width: "100%", backgroundColor: "#EFC81A", padding: "15px"}}>
                            Send E-mail
                        </Button>
                    </Form>
                </div>
            </div>  
        </div>
    )
}
