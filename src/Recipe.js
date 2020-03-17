import React from "react";
import "./App.css";

const Recipe = ({
    title,
    calories,
    image,
    ingredients,
    url,
    healthLabels,
    dietLabels,
    cautions,
    digest,
    key
}) => {
    return (
        <div
            id="card"
            className="card mt-3 mb-3 mr-3 ml-3"
            style={{ width: "20rem" }}
        >
            <img className="card-img-top" src={image} alt="" />
            <div className="card-body">
                <h5 className="card-title"> {title} </h5>
                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button
                                    className="btn btn-link"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="false"
                                    aria-controls="collapseOne"
                                >
                                    Ingredients
                                </button>
                            </h5>
                        </div>
                        <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordionExample"
                        >
                            <div className="card-body">
                                {ingredients.map(ingredient => (
                                    <li>{ingredient.text}</li>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button
                                    className="btn btn-link collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    Important Info
                                </button>
                            </h5>
                        </div>
                        <div
                            id="collapseTwo"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionExample"
                        >
                            <div className="card-body">
                                <p>Calories: {calories}</p>
                                <p>
                                    Diet:
                                    {dietLabels.map(label => (
                                        <li>{label}</li>
                                    ))}
                                </p>
                                <p>
                                    Health:
                                    {healthLabels.map(label => (
                                        <li>{label}</li>
                                    ))}
                                </p>
                                <p>
                                    Cautions:
                                    {cautions.map(label => (
                                        <li>{label}</li>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button
                                    className="btn btn-link collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    Digest
                                </button>
                            </h5>
                        </div>
                        <div
                            id="collapseThree"
                            className="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordionExample"
                        >
                            <div className="card-body">
                                {digest.map(e => (
                                    <li>
                                        {e.label} : {e.total} {e.unit}
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <a href={url} className="btn btn-primary">
                        More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
