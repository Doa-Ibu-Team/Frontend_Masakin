import React, { Component } from 'react'
import './style.css'
import {Link, Redirect} from 'react-router-dom'
import { Logo } from '../../assets'
import { Form, Button } from "react-bootstrap";
import swal from 'sweetalert';
import axios from 'axios';
import {connect} from 'react-redux'
import { setRegis } from "../../redux/actions/Auth";

const base_url = process.env.REACT_APP_BASE_URL;
class Register extends Component {
    state = {
        isRegis: false
    }
    handleSubmit = (e) => {
        const {dispatch} = this.props;
        const data = {
            name: this.name,
            email: this.email,
            phone: this.phone,
            password: this.password,
            password_conf: this.password_conf,

        };
        e.preventDefault()
        this.setState({
            isRegis: true,
        })
        if (data.password !== data.password_conf) {
            swal("Passwords don't match");
        }
        axios
            .post(base_url + '/auth/signup', data)
            .then((res) => {
                console.log(res)
                localStorage.setItem("activatedHere", res.data.activateHere);
                localStorage.setItem("email", res.data.email);
                dispatch(setRegis());
                swal("Selamat Register Berhasil! Sebelum Login silahkan aktivasi akun anda melalui email!")
            })
            .catch((err) => {
                if(err.response.data.status === 409)
                {
                    swal("Email Telah digunakan")
                }
            });

        console.log(data);
        console.log(data.email)
    };
    render() {
        const { auth } = this.props;
        return (
            <>
        <div className="main">
        {auth.isRegis && <Redirect to="/login" />}
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
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    className="shadow"
                    type="text"
                    name="name"
                    onChange={(e) => (this.name = e.target.value)}
                    placeholder="Name"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    className="shadow"
                    type="email"
                    name="email"
                    onChange={(e) => (this.email = e.target.value)}
                    placeholder="examplexxx@gmail.com"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                    className="shadow"
                    type="text"
                    name="phone"
                    onChange={(e) => (this.phone = e.target.value)}
                    placeholder="08xxxxxxxxxx"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Create New Password</Form.Label>
                    <Form.Control
                    className="shadow"
                    type="password"
                    name="password"
                    onChange={(e) => (this.password = e.target.value)}
                    placeholder="Create New Password"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                    className="shadow"
                    type="password"
                    name="password_conf"
                    onChange={(e) => (this.password_conf = e.target.value)}
                    placeholder="New Password"
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
                    height: "20px"
                    }}
                    onClick={this.handleSubmit}
                >
                    Register Account
                </Button>
                </Link>
                <div className="create-acc-left">
                    <p style={{ width: "120px", display: "inline-block" }}>
                    Don't Have account?{" "}
                    </p>
                    <Link
                    to="/register"
                    style={{ color: "#EFC81A", display: "inline-block" }}
                    >
                    Register Account
                    </Link>
                </div>
                </Form>
            </div>
            </div>
            <div className="right-content">
            <div className="box-form-right-side">
                <div style={{ textAlign: "center", marginTop: "170px" }}>
                <h4 style={{ color: "#EFC81A" }}>Let's Get Started! </h4>
                <p>Create new account to access all features</p>
                </div>
                <Form className="my-form-right w-75">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    className="shadow"
                    type="text"
                    name="name"
                    onChange={(e) => (this.name = e.target.value)}
                    placeholder="Name"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    className="shadow"
                    type="email"
                    name="email"
                    onChange={(e) => (this.email = e.target.value)}
                    placeholder="examplexxx@gmail.com"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                    className="shadow"
                    type="text"
                    name="phone"
                    onChange={(e) => (this.phone = e.target.value)}
                    placeholder="08xxxxxxxxxx"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Create New Password</Form.Label>
                    <Form.Control
                    className="shadow"
                    type="password"
                    name="password"
                    onChange={(e) => (this.password = e.target.value)}
                    placeholder="Create New Password"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                    className="shadow"
                    type="password"
                    name="password_conf"
                    onChange={(e) => (this.password_conf = e.target.value)}
                    placeholder="New Password"
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
                    height: "60px"
                    }}
                    onClick={this.handleSubmit}
                >
                    Register Account
                </Button>
                </Form>
                <div className="create-acc" style={{marginTop: "-25px", marginLeft: "60px"}}>
                    <p
                        style={{
                        width: "350px",
                        fontSize: "14px",
                        textAlign: "center",
                        display: "inline",
                        }}
                    >
                        Already Have account?{" "}
                    </p>
                    <Link
                        to="/login"
                        style={{ color: "#EFC81A", display: "inline" }}
                    >
                        Login
                    </Link>
                </div>
            </div>
            </div>
        </div>
        </>
        )
    }
}
const mapStateToProps = ({ auth, newState }) => {
    return {
        auth,
        newState
    };
};
export default connect(mapStateToProps)(Register)