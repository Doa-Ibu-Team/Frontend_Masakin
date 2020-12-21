import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import ForgotPass from "../pages/auth/ForgotPass"
import AddRecipe from "../pages/addRecipe/addRecipe";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/forgot-password" component={ForgotPass} />
      <Route path="/addRecipe" component={AddRecipe} />
    </BrowserRouter>
  );
};

export default Router;
