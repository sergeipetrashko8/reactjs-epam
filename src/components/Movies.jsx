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
            <_MovieSortContainer width="15rem">
                <span>sort by</span>
                <MovieSortSelect/>
            </_MovieSortContainer>
        </_MoviesHeader>
    );
};

const MovieSortSelect = () => {
    return (
        <_MovieSortContainer>
            <select>
                <option value="default">default</option>
                <option value="date:asc">release date: asc</option>
                <option value="date:desc">release date: desc</option>
                <option value="rating:asc">rating: asc</option>
                <option value="rating:desc">rating: desc</option>
            </select>
        </_MovieSortContainer>
    );
};

const _MoviesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
`;

const _MoviesFoundContainer = styled.div({
    height: "3rem",
    display: "flex",
    alignItems: "center",
});

const _Text = styled.span((props) => ({
    fontWeight: props.weight,
    fontSize: props.size,
    display: "inline-block",
    width: props.width
}));

const MoviesFound = ({ count }) => {
    if (count && count > 0) {
        return (
            <>
                <_Text weight="600" size="1.2rem" width="2rem">
                    {count}
                </_Text>
                <_Text weight="100">movies found</_Text>
            </>
        );
    }
    return <_Text>No movies found :?(</_Text>;
};

export const Movies = () => {
    return (
        <>
            <_MoviesFoundContainer>
                <MoviesFound count={movies.length} />
            </_MoviesFoundContainer>
            <_MoviesContainer>
                <MoviesErrorBoundary>
                    {movies.map((val, ind) => (
                        <MovieCard key={ind} {...val} />
                    ))}
                </MoviesErrorBoundary>
            </_MoviesContainer>
        </>
    );
};

const _MovieInfo = styled.div({
    padding: "1rem",
    borderRadius: styles.dimensions.borderRadius,
});

const _MovieTitle = styled.span({
    fontWeight: 500,
    fontSize: "1.2rem",
    maxWidth: "12rem",
    display: "inline-block",
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
    width: "100%",
    borderRadius: styles.dimensions.borderRadius,
    position: "relative",
});

const _MovieCard = styled.div`
    transition: box-shadow 0.5s;
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
    borderRadius: "100%",
});

const _MovieSortContainer = styled.div`
    float: right;
    width: ${p => p.width}
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

const _MovieMenuContainer = styled.div`
    height: 6rem;
    width: 12rem;
    position: absolute;
    z-index: 1;
    background-color: blue;
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    visible: ${(p) => p.show};
`;

const _CloseBtn = styled.div({});
const _MovieMenuBtn = styled.button({});

const CloseBtn = () => {
    return (
        <div>
            <button style={{ float: "right" }}>Close</button>
        </div>
    );
};

const MovieMenu = ({ isOpen }) => {
    return (
        <_MovieMenuContainer show={isOpen}>
            <CloseBtn />
            <_MovieMenuBtn>Edit</_MovieMenuBtn>
            <_MovieMenuBtn>Remove</_MovieMenuBtn>
        </_MovieMenuContainer>
    );
};

class MovieCard extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {
            menuIsOpened: false,
        };
    }

    closeHandler() {
        this.setState({ menuIsOpened: false });
    }

    render() {
        const { imgLink, genres, title, releaseYear } = this.props;

        return (
            <_MovieCard>
                <_MovieBtn
                    onClick={(e) => {
                        this.setState({ menuIsOpened: true });
                    }}
                >
                    <_MovieBtnCircle />
                    <_MovieBtnCircle />
                    <_MovieBtnCircle />
                </_MovieBtn>
                {this.state.menuIsOpened && (
                    <MovieMenu closeHandler={closeHandler} />
                )}
                <_MovieImage src={imgLink} />
                <_MovieInfo>
                    <_MovieTitle>{title}</_MovieTitle>
                    <_MovieDate>{releaseYear}</_MovieDate>
                    <_MovieGenre>{genres.join(", ")}</_MovieGenre>
                </_MovieInfo>
            </_MovieCard>
        );
    }
}

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
