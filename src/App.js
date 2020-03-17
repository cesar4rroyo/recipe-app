import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
    const APP_ID = "baf4ad18";
    const APP_KEY = "0b7d95adc5c789e52f7369b7548a3d39";
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        console.log(data.hits);
        setRecipes(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    };
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };
    function error() {
        return (
            <div className="alert alert-danger mx-5" role="alert">
                We don't have information about this ingredient, type again
            </div>
        );
    }
    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input
                    className="search-bar"
                    type="text"
                    value={search}
                    onChange={updateSearch}
                    placeholder="Type to search"
                />
                <button className="btn btn-primary" type="submit">
                    Search
                </button>
            </form>
            <div>{recipes.length === 0 ? error() : null}</div>
            <div className="row justify-content-md-center">
                {recipes.map(recipe => (
                    <Recipe
                        // className="card-group"
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                        url={recipe.recipe.url}
                        dietLabels={recipe.recipe.dietLabels}
                        healthLabels={recipe.recipe.healthLabels}
                        cautions={recipe.recipe.cautions}
                        digest={recipe.recipe.digest}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
