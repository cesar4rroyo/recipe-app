import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Recipe = ({ title, image, url, source }) => {
    return (
        <div
            className="card card-cascade narrower mt-3 mb-3 mr-3 ml-3"
            id="card"
            style={{ width: 300 }}
        >
            <div className="view view-cascade overlay">
                <img
                    className="card-img-top"
                    src={image}
                    alt="Card image cap"
                />
                <a>
                    <div className="mask rgba-white-slight"></div>
                </a>
            </div>
            <div className="card-body card-body-cascade">
                <h4
                    className="font-weight-bold card-title"
                    style={{ textAlign: "center" }}
                >
                    <i className="fas fa-utensils"></i> {title}
                </h4>

                <Link
                    to={`/details/${title}`}
                    className="btn btn-unique"
                    style={{ display: "block" }}
                >
                    Show more
                </Link>
            </div>

            <div className="card-footer text-muted text-center">
                <a href={url} target="_blank" style={{ color: "chocolate" }}>
                    By: {source}
                </a>
            </div>
        </div>
    );
};

export default Recipe;
