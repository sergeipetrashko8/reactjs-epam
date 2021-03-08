import React from "react";
import styled from "styled-components";

import styles from "../styles.js";
import { movies } from "../data.js";

import { MoviesFilter, Movies } from "./Movies.jsx";

export class Content extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {
            movies: movies,
        };
    }

    sortingSelected(sortObj) {
        if (sortObj.prop === "default") {
            // this.setState({ movies: movies });
            // console.log("default");
        } else {
            console.log(sortObj);
            const sortedMovies = movies.sort((m1, m2) =>
                sortObj.order
                    ? m1[sortObj.prop] - m2[sortObj.prop]
                    : m2[sortObj.prop] - m1[sortObj.prop]
            );
            this.setState({ movies: sortedMovies });
        }
    }

    render() {
        console.log(this.state.movies);
        return (
            <_ContentWrapper>
                <MoviesFilter
                    sortingChanged={this.sortingSelected.bind(this)}
                />
                <_Divider />
                <Movies movies={this.state.movies} />
            </_ContentWrapper>
        );
    }
}

const _ContentWrapper = styled.div`
    min-height: 100vh;
    background-color: ${styles.colors.darkGray};
    padding: 0 3rem 0 3rem;
    overflow: hidden;
    padding-bottom: 7rem;
`;

const _Divider = styled.hr`
    border-style: initial;
    border-top: 0.3rem solid ${styles.colors.gray};
`;
