import React, { Component, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";
import Carousel from "./Carousel";
import DetailsComponent from "./DetailsComponent";
const APP_KEY = "0b7d95adc5c789e52f7369b7548a3d39";
const APP_ID = "baf4ad18";

class Details extends Component {
    state = {
        name: "",
        img: "",
        ingredients: [],
        calories: "",
        dietLabels: [],
        cautions: [],
        healthLabels: [],
        othersResults: [],
        url: "",
        source: "",
        loading: false,
    };

    fetchData = async (recipeName) => {
        try {
            const response = await fetch(
                `https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}`
            );
            const data = await response.json();
            const recipe = data.hits[0].recipe;
            const othersResults = data.hits;
            // console.log(othersResults);
            this.setState({
                name: recipe.label,
                img: recipe.image,
                ingredients: recipe.ingredientLines,
                calories: recipe.calories,
                dietLabels: recipe.dietLabels,
                cautions: recipe.cautions,
                healthLabels: recipe.healthLabels,
                othersResults: othersResults,
                url: recipe.url,
                source: recipe.source,
                loading: false,
            });
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    };
    componentDidMount() {
        const recipeName = this.props.match.params.name;
        this.setState({ loading: true });
        this.fetchData(recipeName);
    }
    goBack() {
        window.history.back();
    }

    render() {
        return (
            <div className="details_cont">
                <Header />
                <a onClick={this.goBack} type="button">
                    <i className="fas fa-chevron-circle-left" id="back_btn">
                        Back
                    </i>
                </a>
                {this.state.loading === true ? <Loader /> : null}
                <DetailsComponent
                    img={this.state.img}
                    url={this.state.url}
                    source={this.state.source}
                    name={this.state.name}
                    ingredients={this.state.ingredients}
                    calories={this.state.calories}
                    cautions={this.state.cautions}
                    healthLabels={this.state.healthLabels}
                    dietLabels={this.state.dietLabels}
                />
                <div className="othersResults">
                    <h3>Others similar results</h3>
                </div>
                <Carousel datos={this.state.othersResults} />
                <Footer />
            </div>
        );
    }
}

export default Details;
