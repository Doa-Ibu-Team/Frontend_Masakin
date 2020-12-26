import React, { Component } from 'react'

import Navbar from '../../components/navbar/navbar'
import Detail from '../../components/Detail/Detail'
import Footer from '../../components/landingPage/footer'


class DetailRecipe extends Component {
	constructor(){
		super()
	}
	render () {
		console.log(this.props)
		return (
			<>
				<Navbar />
				<Detail id={this.props.match.params.id}/>
				<Footer />
			</>
		)
	}
}

export default DetailRecipe