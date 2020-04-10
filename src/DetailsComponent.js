import React, { Component } from "react";
import Details from "./Details";

class DetailsComponent extends Component {
    render() {
        return (
            <div className="container" id="containerDetails">
                <div className="card mt-3 mb-5" style={{ width: 800 }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img
                                src={this.props.img}
                                alt="img"
                                className="card-img-top"
                                id="main_img"
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div
                                    className="accordion md-accordion accordion-3 z-depth-1-half"
                                    id="accordionEx194"
                                    role="tablist"
                                    aria-multiselectable="true"
                                >
                                    <ul className="list-unstyled d-flex justify-content-center pt-1 red-text">
                                        <a
                                            href={this.props.url}
                                            style={{
                                                color: "chocolate",
                                                font: "20px blod",
                                            }}
                                        >
                                            <i className="fas fa-utensils"></i>{" "}
                                            By: {this.props.source}
                                        </a>
                                    </ul>
                                    <h2 className="text-center text-uppercase red-text py-2 px-3">
                                        {this.props.name}
                                    </h2>
                                    <hr className="mb-0" />
                                    <div className="card">
                                        <div
                                            className="card-header"
                                            role="tab"
                                            id="heading4"
                                        >
                                            <a
                                                data-toggle="collapse"
                                                data-parent="#accordionEx194"
                                                href="#collapse4"
                                                aria-expanded="true"
                                                aria-controls="collapse4"
                                            >
                                                <h3 className="mb-0 mt-3 red-text">
                                                    Ingredients
                                                    <i className="fas fa-angle-down rotate-icon fa-2x"></i>
                                                </h3>
                                            </a>
                                        </div>
                                        <div
                                            id="collapse4"
                                            className="collapse show"
                                            role="tabpanel"
                                            aria-labelledby="heading4"
                                            data-parent="#accordionEx194"
                                        >
                                            <div className="card-body pt-0">
                                                <ul>
                                                    {this.props.ingredients.map(
                                                        (ingredient, index) => (
                                                            <li key={index}>
                                                                {ingredient}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div
                                            className="card-header"
                                            role="tab"
                                            id="heading5"
                                        >
                                            <a
                                                className="collapsed"
                                                data-toggle="collapse"
                                                data-parent="#accordionEx194"
                                                href="#collapse5"
                                                aria-expanded="false"
                                                aria-controls="collapse5"
                                            >
                                                <h3 className="mb-0 mt-3 red-text">
                                                    About the recipe
                                                    <i className="fas fa-angle-down rotate-icon fa-2x"></i>
                                                </h3>
                                            </a>
                                        </div>
                                        <div
                                            id="collapse5"
                                            className="collapse"
                                            role="tabpanel"
                                            aria-labelledby="heading5"
                                            data-parent="#accordionEx194"
                                        >
                                            <div className="card-body pt-0">
                                                Calories: {this.props.calories}
                                                <br />
                                                DietLabels:
                                                <ul>
                                                    {this.props.dietLabels.map(
                                                        (dietLabels, index) => (
                                                            <li key={index}>
                                                                {dietLabels}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                                HealthLabels:
                                                <ul>
                                                    {this.props.healthLabels.map(
                                                        (hl, index) => (
                                                            <li key={index}>
                                                                {hl}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                                Cautions:
                                                <ul>
                                                    {this.props.cautions.map(
                                                        (cautions, index) => (
                                                            <li key={index}>
                                                                {cautions}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailsComponent;
