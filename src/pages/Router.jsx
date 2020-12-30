import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Login from "./auth/Login"
import Register from "./auth/Register"
import ForgotPass from "./auth/ForgotPass"
import AddRecipe from "./recipe/addRecipe";
import EditRecipe from "./recipe/editRecipe"
import SearchPage from './search/search'
import Profile from "./profile/profile";
import DetailRecipe from "./recipe/DetailRecipe";
import { Provider } from "react-redux";
import store from "../redux/store";
import CodeReset from "./auth/CodeReset";
import ResetPass from "./auth/ResetPass";
import PrivateRoute from "../components/PrivateRoute";

const Router = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={ForgotPass} />
        <Route path="/code-reset" component={CodeReset} />
        <Route path="/reset-password" component={ResetPass} />
        <PrivateRoute path="/add" component={AddRecipe} />
        <Route exact path="/edit/:id" component={EditRecipe} />
        <PrivateRoute exact path='/recipe/:id' component={DetailRecipe} />
        <Route path="/search" component={SearchPage} />
        <PrivateRoute path="/profile" component={Profile} />
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
