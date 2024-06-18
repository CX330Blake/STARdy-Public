import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ element, ...rest }) => {
    const { user } = useAuth();

    return (
        <Routes>
            <Route {...rest} element={user ? element : <Navigate to="/" />} />
        </Routes>
    );
};

export default ProtectedRoute;
