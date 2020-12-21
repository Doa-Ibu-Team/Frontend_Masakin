import React from 'react';
import Navbar from '../../components/navbar/navbar';
import AddRecipe from '../../components/addRecipe/addRecipe'
import { Container } from "react-bootstrap"
function addRecipe() {
    return (
        <>
                <Navbar />
                <Container style={{ marginTop: "20px" }}>
                    <div className="row">
                        <div className="col-10">
                            <AddRecipe />
                        </div>
                    </div>
                </Container>
            </>
    );
}

export default addRecipe