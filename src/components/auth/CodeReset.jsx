import React, { Component } from 'react'
import './style.css'
import { Logo } from '../../assets'
import { Form, Button } from "react-bootstrap";
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'
import swal from 'sweetalert'
import { setCodeReset, setCodeResetFalse } from '../../redux/actions/Auth'
import { connect } from 'react-redux'

const base_url = process.env.REACT_APP_BASE_URL

class CodeReset extends Component {
  state = {
    isCodeReset: false
  }
  handleSubmit = (e) => {
    const {dispatch} = this.props;
    const data = {
        otp: this.otp,
    }
    e.preventDefault()
    if(data.otp !== localStorage.getItem("otp")) {
      dispatch(setCodeResetFalse())
      swal("Code OTP is Wrong!")
    }
    else {
      dispatch(setCodeReset());
      localStorage.removeItem("otp")
      swal("Code OTP True")
    }
}
    render() {
      console.log(localStorage)
      const { auth } = this.props;
    return (
    <>
      <div className="main">
      {auth.isCodeReset && <Redirect to="/reset-password" />}
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
                <Form.Label>Code 6 Digit</Form.Label>
                <Form.Control
                  className="shadow"
                  type="text"
                  name="code_reset"
                  placeholder=""
                  // onChange={(e) => (this.otp = e.target.value)}
                />
              </Form.Group>
                <Button
                    type="submit"
                    style={{
                    width: "100%",
                    backgroundColor: "#EFC81A",
                    padding: "15px",
                    }}
                    // onClick={this.handleSubmit}
                >
                    Reset Password
                </Button>
            </Form>
          </div>
        </div>
        <div className="right-content">
          <div className="box-form-right-side">
            <Form className="my-form-right w-75" style={{marginTop: "340px"}}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Code 6 Digit</Form.Label>
                <Form.Control
                  className="shadow"
                  type="text"
                  placeholder=""
                  onChange={(e) => (this.otp = e.target.value)}
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
export default connect(mapStateToProps)(CodeReset)