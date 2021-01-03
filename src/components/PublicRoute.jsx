import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PublicRoute = ({ component: Component, auth,restricted,...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") && restricted ? 
        <Component {...props} /> : <Redirect to={{
          pathname: "/",
          state: {from: props.location}
        }} />
      }
    />
  );
};


const mapStateToProps = ({ auth }) => {
    return {
      auth,
    };
  };
  
  export default connect(mapStateToProps)(PublicRoute);