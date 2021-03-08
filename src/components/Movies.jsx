import styles from "../styles.js";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { movies } from "../data.js";

export const MoviesFilter = () => {
    const genres = ["all", "documentary", "comedy", "horror", "crime"];

    return (
        <_MoviesHeader>
            <_MoviesNav>
                {genres.map((genre) => (
                    <a key={genre} href={`#${genre}`}>
                        {genre}
                    </a>
                ))}
            </_MoviesNav>
            <_MovieSort>
                <span>sort by</span>
                <select></select>
            </_MovieSort>
        </_MoviesHeader>
    );
};

const _MoviesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Movies = () => {
    return (
        <_MoviesContainer>
            <MoviesErrorBoundary>
                {movies.map((val, ind) => (
                    <MovieCard key={ind} {...val} />
                ))}
            </MoviesErrorBoundary>
        </_MoviesContainer>
    );
};


const _MovieInfo = styled.div({
    padding: "1rem",
    borderRadius: styles.dimensions.borderRadius,
});

const _MovieTitle = styled.span({
    fontWeight: 500,
    fontSize: "1.2rem",
});

const _MovieDate = styled.span({
    float: "right",
    border: `0.15rem solid ${styles.colors.lightGray}`,
    padding: "0.3rem 1.5rem",
    borderRadius: styles.dimensions.borderRadius,
});

const _MovieGenre = styled.div({
    marginTop: "0.8rem",
    textTransform: "capitalize",
});

const _MovieImage = styled.img({
    height: "30rem",
    width: "20rem",
    borderRadius: styles.dimensions.borderRadius,
    position: "relative"
});

const _MovieCard = styled.div`
    transition: box-shadow 0.5s;
    margin-bottom: 2rem;
    border: 0.2rem solid ${styles.colors.darkGray};
    border-radius: ${styles.dimensions.borderRadius};
    position: relative;

    &:hover {
        box-shadow: 0px 0px 20px 4px ${styles.colors.pink};

        button {
            opacity: 0.75;
        }
    }
`;

const _MovieBtn = styled.button`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    z-index: 1;
    top: 1rem;
    right: 1rem;
    border-radius: 100%;
    height: 2.5rem;
    width: 2.5rem;
    border: none;
    transition: 0.3s opacity;
    opacity: 0;
    background-color: ${styles.colors.darkGray};
`;

const _MovieBtnCircle = styled.span({
    display: "inline-block",
    height: "0.3rem",
    width: "0.3rem",
    backgroundColor: styles.colors.white,
    borderRadius: "100%"
});


const _MovieSort = styled.span`
    float: right;
`;


class MoviesErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {}

    render() {
        if (this.state.hasError) {
            return <div>no movie found</div>;
        }
        return this.props.children;
    }
}

const MovieCard = ({ imgLink, genres, title, releaseYear }) => {
    return (
        <_MovieCard>
            <_MovieBtn>
                <_MovieBtnCircle/>
                <_MovieBtnCircle/>
                <_MovieBtnCircle/>
            </_MovieBtn>
            <_MovieImage src={imgLink} />
            <_MovieInfo>
                <_MovieTitle>{title}</_MovieTitle>
                <_MovieDate>{releaseYear}</_MovieDate>
                <_MovieGenre>{genres}</_MovieGenre>
            </_MovieInfo>
        </_MovieCard>
    );
};

MovieCard.propTypes = {
    imgLink: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
};

const _MoviesHeader = styled.div`
    margin: 1rem 0;
    font-size: 1.2rem;
    text-transform: uppercase;
`;

const _MoviesNav = styled.nav`
    display: inline;

    a {
        text-decoration: none;
        font-weight: 500;
        margin: 0 1rem;
        position: relative;
        color: ${styles.colors.white};

        &::after {
            content: "";
            position: absolute;
            bottom: -0.2rem;
            left: 0;
            width: 0;
            border-top: solid ${styles.colors.white} 0.2rem;
            transition: width 0.5s;
        }

        &:active {
            color: ${styles.colors.pink};
        }
        &:hover {
            &:after {
                width: 100%;
            }
        }
    }

    :first-child {
        margin-left: initial;
    }
    :last-child {
        margin-right: initial;
    }
`;
