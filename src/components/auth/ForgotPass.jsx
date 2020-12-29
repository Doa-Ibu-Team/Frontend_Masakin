import React, { Component } from 'react'
import './style.css'
import { Logo } from '../../assets'
import { Form, Button } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import swal from 'sweetalert'
import { connect } from "react-redux";
import { setForgotPass } from '../../redux/actions/Auth'

const base_url = process.env.REACT_APP_BASE_URL
console.log(base_url)

class ForgotPass extends Component {
  state = {
    isForgot: false
  }
  handleSubmit = (e) => {
    const {dispatch} = this.props;
    const data = {
        email: this.email
    }
    e.preventDefault()
    axios.post(base_url + '/auth/forgot_password', data)
        .then((res) => {
            this.setState({
                isForgot: true
            })
            localStorage.setItem("email", res.data.email);
            // dispatch(setForgotPass());
            swal("Sent Sukses!!! Silahkan cek email anda!");

        }).catch((error) => {
            console.log(error)
            swal("Sent Gagal!")
        })
}
    render() {
      console.log(localStorage)
      const { auth } = this.props;
        return (
    <>
      <div className="main">
      {auth.isForgot && <Redirect to="/code-reset" />}
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
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="shadow"
                  type="email"
                  name="email"
                  onChange={(e) => (this.email = e.target.value)}
                  placeholder="examplexxx@gmail.com"

                />
              </Form.Group>
                <Button
                    type="submit"
                    style={{
                    width: "100%",
                    backgroundColor: "#EFC81A",
                    padding: "15px",
                    }}
                    onClick={this.handleSubmit}>
                    Send E-mail
                </Button>
            </Form>
          </div>
        </div>
        <div className="right-content">
          <div className="box-form-right-side">
            <div style={{ textAlign: "center", marginTop: "170px" }}>
              <h4 style={{ color: "#EFC81A" }}>Forgot Password ? </h4>
              <p style={{ width: "50%", marginLeft: "25%" }}>We just need your registered e-mail address to send your password resend</p>
            </div>
            <Form className="my-form-right w-75">
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
                <Button
                    type="submit"
                    style={{
                    width: "100%",
                    backgroundColor: "#EFC81A",
                    padding: "15px",
                    }}
                    onClick={this.handleSubmit}
                >
            
                    Send E-mail
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
export default connect(mapStateToProps)(ForgotPass)