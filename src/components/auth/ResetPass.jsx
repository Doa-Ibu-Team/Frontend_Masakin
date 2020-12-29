import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";
import { Logo } from "../../assets";
import { Form, Button } from "react-bootstrap";
import swal from 'sweetalert'
import './style.css'
import axios from 'axios';
import { setResetPass } from '../../redux/actions/Auth'
import { connect } from 'react-redux'

const base_url = process.env.REACT_APP_BASE_URL

class ResetPass extends Component {
    state = {
        isReset: false
    }
    handleSubmit = (e) => {
        const {dispatch} = this.props;
        const data = {
            new_password: this.new_password,
            password_conf: this.password_conf

        };
        e.preventDefault()
        this.setState({
            isReset: true,
        })
        if (data.new_password !== data.password_conf) {
            swal("Passwords don't match");
        }
        axios
            .patch(base_url + 'auth/reset_password/' + localStorage.getItem("token") , data)
            .then((res) => {
                console.log(res)
                // localStorage.setItem("activatedHere", res.data.activateHere);
                // localStorage.setItem("email", res.data.email);
                dispatch(setResetPass());
                localStorage.removeItem("token")
                swal("Selamat Reset Password Berhasil!")
            })
            .catch((err) => {
                if(err.response.data.status === 409)
                {
                    swal("Email Telah digunakan")
                }
                console.log(err)
            });

        console.log(data);
        console.log(data.email)
    };
    
    render() {
        console.log(localStorage)
        const { auth } = this.props;
        return (
        <>
        <div className="main">
        {auth.isReset && <Redirect to="/login" />}
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
                    name="new_password"
                    placeholder=""
                    onChange={(e) => (this.new_password = e.target.value)}
                    />
                </Form.Group>
    
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                    className="shadow"
                    type="password"
                    name="password_conf"
                    placeholder="Password"
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
                    name="new_password"
                    placeholder=""
                    required
                    onChange={(e) => (this.new_password = e.target.value)}
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
                </Form>
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
  export default connect(mapStateToProps)(ResetPass)