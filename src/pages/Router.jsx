import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

<<<<<<< HEAD
import Home from './Home'
import AddRecipe from './addRecipe/addRecipe'
=======
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import ForgotPass from "../pages/auth/ForgotPass"
import AddRecipe from "../pages/addRecipe/addRecipe";
>>>>>>> 88e0e79cb2a9a05ea7173b3218f4d91d6630fcd4

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forgot-password" component={ForgotPass} />
      <Route path="/addRecipe" component={AddRecipe} />
    </BrowserRouter>
  );
};

export default Router;
