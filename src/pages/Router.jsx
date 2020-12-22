import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Login from "./auth/Login"
import Register from "./auth/Register"
import ForgotPass from "./auth/ForgotPass"
import AddRecipe from "../pages/addRecipe/addRecipe";
import PrivateRoute from "../components/PrivateRoute";
// import store from "../redux/store";
// import { Provider } from "react-redux";

const Router = () => {
	return (
		// <Provider store={store}>
		<BrowserRouter>
			<Route exact path="/" component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<Route path="/forgot-password" component={ForgotPass} />
			<Route path="/addRecipe" component={AddRecipe} />
			{/* <PrivateRoute path="/addRecipe" component={AddRecipe} /> */}
		</BrowserRouter>
		// </Provider>
	);
};

export default Router;
