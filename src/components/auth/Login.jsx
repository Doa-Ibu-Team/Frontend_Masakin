import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";
import { Logo } from "../../assets";
import { Form, Button } from "react-bootstrap";
import './style.css'
import axios from 'axios'
import swal from 'sweetalert'
import { setLogin, setLoginFalse } from '../../redux/actions/Auth';
import {connect} from 'react-redux'

const base_url = process.env.REACT_APP_BASE_URL
console.log(base_url)

class Login extends Component {

    state = {
        isLogin : false
    }
    handleSubmit = (e) => {
        const {dispatch} = this.props;
        const data = {
            email: this.email,
            password: this.password,
            checkbox: this.checkbox
        }
        e.preventDefault()
        
        axios.post(base_url + '/auth/login', data)
        .then((res) => {
            
            this.setState({
                isLogin: true,
            })
            localStorage.setItem("token", res.data.token);
            localStorage.setItem('email', res.data.email)
            res.headers["x-access-token"] = res.data.token;
            localStorage.setItem("user_ID", res.data.id_user);
            localStorage.setItem("name", res.data.name);

            dispatch(setLogin());
            swal("Login Berhasil");

        }).catch((err) => {
            // console.log(err)
            // swal('username atau pasword salah')
            if(err.response.data.status === 403) {
                dispatch(setLoginFalse())
                swal("Password Salah!")
                console.log(err.response.data.status)
            }
            if(err.response.data.status === 401) {
                dispatch(setLoginFalse())
                swal("Please activate your account first!")
                console.log(err.response.data.status)
            }
            if(err.response.status === 404) {
                dispatch(setLoginFalse())
                swal("Email not found!")
                console.log(err.response.data.status)
            }
            
        })
    }
    render() {
        console.log(localStorage)
        const { auth } = this.props;
        console.log(auth.newState)
        return (
        <>
        <div className="main">
        {auth.isLogin && <Redirect to="/" />}
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
    
                <Form className="my-form" >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    className="shadow"
                    type="email"
                    name="email"
                    onChange={(e) => (this.email = e.target.value)}
                    placeholder="examplexxx@gmail.com"
                    required
                    />
                </Form.Group>
    
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        className="shadow form-control"
                        type="password"
                        name="password"
                        onChange={(e) => (this.password = e.target.value)}
                        placeholder="Password"
                        required
                        
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                    type="checkbox"
                    label=" I agree terms and condition"
                    name="checkBox"
                    style={{ fontSize: "13px" }}
                    onChange={(e) => (this.checkbox = e.target.value)}
                    required
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
                    onClick={this.handleSubmit}
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
                <Form className="my-form-right w-75" >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    className="shadow"
                    type="email"
                    name="email"
                    onChange={(e) => (this.email = e.target.value)}
                    placeholder="examplexxx@gmail.com"
                    required
                    
                    />
                </Form.Group>
    
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        className="shadow form-control"
                        type="password"
                        name="password"
                        onChange={(e) => (this.password = e.target.value)}
                        placeholder="Password"
                        required
                        
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                    type="checkbox"
                    name="checkBox"
                    label=" I agree terms and condition"
                    style={{ fontSize: "13px" }}
                    required
                    onChange={(e) => (this.checkbox = e.target.value)}
                    />
                </Form.Group>
                <Button
                    type="submit"
                    style={{
                    width: "100%",
                    backgroundColor: "#EFC81A",
                    padding: "15px",
                    }}
                    onClick={this.handleSubmit}
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
        )
    }
}
const mapStateToProps = ({ auth, newState }) => {
    return {
        auth,
        newState
    };
};
export default connect(mapStateToProps)(Login)