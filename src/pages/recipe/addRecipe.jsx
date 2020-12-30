import React from 'react';
import Navbar from '../../components/landingPage/Navbar';
import AddRecipe from '../../components/Recipe/addRecipe'
import Footer from '../../components/landingPage/Footer'
import { Container } from "react-bootstrap"
function addRecipe() {
    return (
        <>
                <Navbar />
                <Container style={{ marginTop: "0px" }}>
                    <div className="row">
                        <div className="col-10">
                            <AddRecipe />
                        </div>
                    </div>
                </Container>
                <Footer />
            </>
    );
}

export default addRecipe