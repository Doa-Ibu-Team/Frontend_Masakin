import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import DetailProfile from '../../components/profile/profile'
import Footer from '../../components/landingPage/footer'

class Profile extends Component {
	render () {
		return (
			<>
				<Navbar />
				<DetailProfile />
				<Footer />
			</>
		)
	}
}
export default Profile