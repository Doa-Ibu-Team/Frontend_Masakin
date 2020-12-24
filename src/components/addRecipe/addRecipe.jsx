import React, { Component } from 'react';
import { Jumbotron, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import css from "./addRecipe.module.css";

class addRecipe extends Component {

    constructor(props) {
        super(props)
        this.state = {
            file: null,
            fileUpload: []
        }
        this.handleFile = this.handleFile.bind(this)
    }
    handleFile(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0]),
            fileUpload: event.target.files
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className='container'>
                <div className="card border-white mb4" style={{ width: "99%", height: "auto", marginTop: "50px", marginLeft: "70px" }}>
                    <div className="card-body">
                        <Form encType="multipart/form-data" onSubmit={this.submitHandler}>
                            <Jumbotron className="container-gap">
                                <h4>Add Photo</h4>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-md-8 row">
                                        <input type="file" name='product_img' onChange={this.handleFile} autoComplete='off' placeholder="" multiple />
                                        <img src={this.state.file} />
                                    </div>
                                </div>
                            </Jumbotron>
                            <Form.Group controlId="formBasicText" style={{margin: '2rem auto 2rem auto'}}>
                                <Form.Control type="text" name='title' autoComplete='off' placeholder="Title" style={{ background: '#F6F5F4' }} />
                            </Form.Group>
                            <Form.Group controlId="formBasicText" style={{margin: '2rem auto 2rem auto'}}>
                                <Form.Control as="textarea" rows={10} name='ingredients' autoComplete='off' placeholder="Ingredients" style={{ background: '#F6F5F4' }} />
                            </Form.Group>
                            <Form.Group controlId="formBasicText" style={{margin: '2rem auto 2rem auto'}}>
                                <Form.Control type="text" name='video' autoComplete='off' placeholder="Video" style={{ background: '#F6F5F4' }} />
                            </Form.Group>
                            <div className='d-flex justify-content-center'>
                            <Button variant="warning" type="submit" style={{width: '300px'}}>
                                Submit
                            </Button>
                            </div>
                        </Form>
                    </div>
                </div >
            </div>

        );
    }
}

export default addRecipe;