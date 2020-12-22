import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './Home'
import AddRecipe from './addRecipe/addRecipe'

const Router = () => {
	return (
		<BrowserRouter>
			<Route exact path="/" component={Home} />
			<Route path="/addRecipe" component={AddRecipe} />
		</BrowserRouter>
	)
}

export default Router