import React from "react";
import Recipe from "./Recipe";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";
import Search from "./Search";
import { Hero } from "./Hero";
import { useEffect, useState } from "react";

const Home = () => {
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

    const updateSearch = (e) => {
        setSearch(e.target.value);
    };
    const getSearch = (e) => {
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
                <Search
                    onSubmit={getSearch}
                    value={search}
                    onChange={updateSearch}
                />
                {query === "chicken" ? <Hero /> : null}

                <div>{fail ? error() : null}</div>
                {loading ? <Loader /> : null}
                <div className="container">
                    <div className="row">
                        {recipes.map((recipe, index) => (
                            <Recipe
                                key={index}
                                title={recipe.recipe.label}
                                image={recipe.recipe.image}
                                url={recipe.recipe.url}
                                source={recipe.recipe.source}
                                time={recipe.recipe.totalTime}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {recipes.length !== 0 ? <Footer /> : null}
        </div>
    );
};

export default Home;
