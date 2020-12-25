import React, { Component } from 'react';
import { Jumbotron, Button, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import squareImg from "../../assets/icons/imageupload.png";
import css from "./addRecipe.module.css";
import axios from 'axios';
const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        "x-access-token": "Bearer " + localStorage.getItem("token")
    },
}

const baseUrl = process.env.REACT_APP_BASE_URL
console.log(config)

class addRecipe extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            ingredients: '',
            videos: [],
            file: null,
            img: [],
            dataInserted: false
        }
        this.handleFile = this.handleFile.bind(this)
        this.handleVideo = this.handleVideo.bind(this)
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleFile(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0]),
            img: event.target.files
        })
    }

    handleVideo(event) {
        this.setState({
            videos: event.target.files
        })
    }

    submitHandler = e => {
        console.log('aaaa')
        let formdata = new FormData()
        formdata.append('user_id', localStorage.getItem('user_id'))
        formdata.append('title', this.state.title)
        formdata.append('ingredients', this.state.ingredients)
        for (let i = 0; i < this.state.img.length; i++) {
            formdata.append('img', this.state.img[i])
        }
        for (let i = 0; i < this.state.videos.length; i++) {
            formdata.append("videos", this.state.videos[i]);
        }
        console.log(formdata)
        e.preventDefault()
        axios.post(baseUrl + '/recipe/b/add', formdata, config)
            .then(response => {
                console.log(response)
                this.setState({
                    dataInserted: true
                })
            })
            .catch(error => {
                console.log(error)
            })

    }

    render() {
        console.log(this.state)
        const { user_id, title, ingredients, img, videos } = this.state
        return (
            <div className='container'>
                {/* {this.state.dataInserted && <Redirect to="/profile" />} */}
                <div className="card border-white mb4" style={{ width: "99%", height: "auto", marginLeft: "70px" }}>
                    <div className="card-body">
                        <Form encType="multipart/form-data" onSubmit={this.submitHandler}>
                            <Jumbotron className="container-gap" style={{ backgroundColor: '#F6F5F4' }}>
                                <p style={{ color: "gray", fontSize: "5px", position: "relative", right: "1rem" }} className="mb-n1">Image</p>
                                <div className="col-md-8 row">
                                    <img src={squareImg} alt="" />
                                    <div className={css.UploadBtn}>Add Photo</div>
                                    <input type="file" name='img' onChange={this.handleFile} autoComplete='off' placeholder="" />
                                    <img src={this.state.file} />
                                </div>
                            </Jumbotron>
                            <Form.Group controlId="formBasicText" style={{ margin: '2rem auto 2rem auto' }}>
                                <Form.Control type="text" name='title' value={title} onChange={this.changeHandler} autoComplete='off' placeholder="Title" style={{ background: '#F6F5F4' }} />
                            </Form.Group>
                            <Form.Group controlId="formBasicText" style={{ margin: '2rem auto 2rem auto' }}>
                                <Form.Control as="textarea" rows={10} name='ingredients' value={ingredients} onChange={this.changeHandler} autoComplete='off' placeholder="Ingredients" style={{ background: '#F6F5F4' }} />
                            </Form.Group>
                            <Form.Group controlId="formBasicText" style={{ margin: '2rem auto 2rem auto' }}>
                                <Form.Control type="file" name='videos' onChange={this.handleVideo} autoComplete='off' placeholder="Videos" style={{ background: '#F6F5F4' }} multiple />
                            </Form.Group>
                            <div className='d-flex justify-content-center'>
                                <Button variant="warning" type="submit" style={{ width: '300px' }}>
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div >
            </div >

        );
    }
}

export default addRecipe;