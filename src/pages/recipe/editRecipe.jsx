import Navbar from '../../components/landingPage/Navbar';
import EditRecipe from '../../components/Recipe/editRecipe'
import Footer from '../../components/landingPage/Footer'
import { Container } from "react-bootstrap"
import React, { Component } from 'react';

class editRecipe extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props)
        return (
            <>
                <Navbar />
                <Container style={{ marginTop: "0px" }}>
                    <div className="row">
                        <div className="col-10">
                            <EditRecipe id={this.props.match.params.id}/>
                        </div>
                    </div>
                </Container>
                <Footer />
            </>
        );
    }
}

export default editRecipe;