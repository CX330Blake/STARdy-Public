import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <GoogleOAuthProvider clientId="MY_CLIENT_ID">
        <App />
        <Footer />
    </GoogleOAuthProvider>
);

reportWebVitals(console.log);
