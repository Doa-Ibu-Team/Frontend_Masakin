import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../pages/home'
import AddRecipe from '../pages/addRecipe/addRecipe'

const Router = () => {
	return (
		<BrowserRouter>
			<Route exact path="/" component={Home} />
			<Route path="/addRecipe" component={AddRecipe} />
		</BrowserRouter>
	)
}

export default Router