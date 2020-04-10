import React from "react";
import { Component } from "react";

class Search extends Component {
    render() {
        return (
            <div className="cont_search">
                <form onSubmit={this.props.onSubmit} className="search-form">
                    <input
                        className="search-bar"
                        type="text"
                        value={this.props.value}
                        onChange={this.props.onChange}
                        placeholder="Type to search"
                    />
                    <button className="btn btn-primary" type="submit">
                        Search
                    </button>
                </form>
            </div>
        );
    }
}

export default Search;
