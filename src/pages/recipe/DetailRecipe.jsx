import React, { Component } from 'react'

import Navbar from '../../components/navbar/navbar'
import Detail from '../../components/Detail/Detail'
import Footer from '../../components/landingPage/footer'

class DetailRecipe extends Component {
	render () {
		return (
			<>
				<Navbar />
				<Detail />
				<Footer />
			</>
		)
	}
}

export default DetailRecipe