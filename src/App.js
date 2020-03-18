import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

const App = () => {
    const APP_ID = "baf4ad18";
    const APP_KEY = "0b7d95adc5c789e52f7369b7548a3d39";
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");
    const [loading, setLoading] = useState(true);
    const [fail, setFail] = useState(false);

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        try {
            const response = await fetch(
                `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
            );
            const data = await response.json();
            console.log(data.hits);
            setRecipes(data.hits);
            if (data.hits.length === 0) {
                setFail(true);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setFail(true);
        }
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
        <div>
            <div className="App">
                <Header />
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
                <div>{fail ? error() : null}</div>
                <div className="conatiner_loader">
                    {loading ? <Loader /> : null}
                </div>
                <div className="row justify-content-md-center">
                    {recipes.map(recipe => (
                        <Recipe
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
            {recipes.length !== 0 ? <Footer /> : null}
        </div>
    );
};

export default App;
