import React, { Component } from 'react';
import Navbar from '../../components/landingPage/Navbar';
import SearchItems from '../../components/searchItems';
import { Container } from "react-bootstrap";
import axios from 'axios'

const base_url = process.env.REACT_APP_BASE_URL + '/search?'
console.log(base_url)
const urlParams = new URLSearchParams(window.location.search)

console.log(typeof (urlParams))
console.log(urlParams)

export default class SearchPage extends Component {
    state = {
        items: [],
    }

    getItems = () => {
        axios.get(base_url + urlParams)
            .then(({ data }) => {
                console.log(data)
                this.setState({
                    items: data.recipe,
                    page: data.pageInfo
                })
            }).catch((err) => {
                console.log(err)
            })
    }

    componentDidMount = () => {
        this.getItems()
        console.log("didMount")
    }

    render() {
        console.log(this.state)
        console.log("render")
        const { items } = this.state
        console.log(this.props)
        return (
            <>
                <Navbar />
                    <Container>
                        <h3 className="session-tag gap-content">Results</h3>
                    </Container>
                    <div >
                        {
                            items && items.map(({ id_recipe, title, img }) => {
                                return (
                                    <SearchItems id_recipe={id_recipe} title={title} img={img} />
                                )
                            })
                        }
                    </div>
            </>
        )
    }
}
