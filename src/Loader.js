import React from "react";
import "./loader.css";
const Loader = () => {
    return (
        <div className="conatiner_loader">
            <div className="lds-spinner" id="loader_details">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;
