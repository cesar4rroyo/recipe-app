import React, { Component } from "react";
import RecipeUrl from "./RecipeUrl";

class Carousel extends Component {
    render() {
        console.log(this.props.datos);
        return (
            <div className="container">
                <div className="row ">
                    {this.props.datos.map((recipe, index) =>
                        index === 0 ? null : (
                            <RecipeUrl
                                key={index}
                                title={recipe.recipe.label}
                                image={recipe.recipe.image}
                                url={recipe.recipe.url}
                                source={recipe.recipe.source}
                            />
                        )
                    )}
                </div>
            </div>
        );
    }
}

export default Carousel;
