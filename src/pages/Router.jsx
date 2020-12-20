import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Home';
import Login from './Auth/Login';
import Register from './Auth/Register';
import ForgotPass from './Auth/ForgotPass';

export default function Router() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgot-password" component={ForgotPass} />
        </BrowserRouter>
    )
}
