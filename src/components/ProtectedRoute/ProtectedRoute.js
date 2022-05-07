import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = ({children,isAdmin}) => {
  const { loading, isAuthenticated, user} = useSelector((state) => state.user);

    if (!isAuthenticated) {
        return <Navigate to = "/login"/>;
    }
    if ( isAdmin === true && user.role !== "admin") {
      return <Navigate to="/login" />;
    }

    return children ? children : < Outlet /> ;
};

export default ProtectedRoute;

