import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import ForgotPass from "../pages/auth/ForgotPass"
import AddRecipe from "../pages/addRecipe/addRecipe";
import { Provider } from "react-redux";
import store from "../redux/store";

const Router = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={ForgotPass} />
        <Route path="/addRecipe" component={AddRecipe} />
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
