import React, { ReactElement, useContext } from "react";
import { AppContext } from "../../context";
import { Navigate } from "react-router-dom";

interface WithAuthProps {
    children: ReactElement;
}

export const WithAuth: React.FC<WithAuthProps> = (props) => {
    const context = useContext(AppContext);
    const credentials = localStorage.getItem("userAuthCredentials");

    if (!credentials) {          // if user go to page by search  
        context?.logout();
    }

    return !context?.isAuthenticated ? (
        <Navigate to= "/login" />
    ) : (
        <>{props.children}</>
    );
}