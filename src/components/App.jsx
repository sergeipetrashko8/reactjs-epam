import React from "react";
import "../styles/index.scss";
import PropTypes from "prop-types";

const movies = [
    {
        title: "Tom and Jerry",
        releaseYear: "2021",
        genres: ["comedy"],
        imgLink: "https://static.hdrezka.ac/i/2020/12/24/u04e8b4d16bbbve54s24p.png",
    },
    {
        title: "Monster Hunter",
        releaseYear: "2020",
        genres: ["advanture"],
        imgLink: "https://static.hdrezka.ac/i/2021/2/16/vd5198e450627qx26r37j.png",
    },
    {
        title: "Tom and Jerry",
        releaseYear: "2021",
        genres: ["comedy"],
        imgLink: "https://static.hdrezka.ac/i/2020/12/24/u04e8b4d16bbbve54s24p.png",
    },
    {
        title: "Monster Hunter",
        releaseYear: "2020",
        genres: ["advanture"],
        imgLink: "https://static.hdrezka.ac/i/2021/2/16/vd5198e450627qx26r37j.png",
    },
    {
        title: "Tom and Jerry",
        releaseYear: "2021",
        genres: ["comedy"],
        imgLink: "https://static.hdrezka.ac/i/2020/12/24/u04e8b4d16bbbve54s24p.png",
    },
    {
        title: "Monster Hunter",
        releaseYear: "2020",
        genres: ["advanture"],
        imgLink: "https://static.hdrezka.ac/i/2021/2/16/vd5198e450627qx26r37j.png",
    },
    {
        title: "Tom and Jerry",
        releaseYear: "2021",
        genres: ["comedy"],
        imgLink: "https://static.hdrezka.ac/i/2020/12/24/u04e8b4d16bbbve54s24p.png",
    },
    {
        title: "Monster Hunter",
        releaseYear: "2020",
        genres: ["advanture"],
        imgLink: "https://static.hdrezka.ac/i/2021/2/16/vd5198e450627qx26r37j.png",
    },
    {
        title: "Tom and Jerry",
        releaseYear: "2021",
        genres: ["comedy"],
        imgLink: "https://static.hdrezka.ac/i/2020/12/24/u04e8b4d16bbbve54s24p.png",
    },
    {
        title: "Monster Hunter",
        releaseYear: "2020",
        genres: ["advanture"],
        imgLink: "https://static.hdrezka.ac/i/2021/2/16/vd5198e450627qx26r37j.png",
    },
    {
        title: "Tom and Jerry",
        releaseYear: "2021",
        genres: ["comedy"],
        imgLink: "https://static.hdrezka.ac/i/2020/12/24/u04e8b4d16bbbve54s24p.png",
    },
    {
        title: "Monster Hunter",
        releaseYear: "2020",
        genres: ["advanture"],
        imgLink: "https://static.hdrezka.ac/i/2021/2/16/vd5198e450627qx26r37j.png",
    },
];

export default function App() {
    return (
        <>
            <HeaderWithTitle>
                <div className="search-container">
                    <AddMovieBtn />
                    <div className="find-movie-title">find your movie</div>
                    <SearchWidget />
                </div>
            </HeaderWithTitle>
            <Content />
            <Footer>
                <div className="center-text">
                    <AppTitle />
                </div>
            </Footer>
        </>
    );
}

const Header = ({ children }) => (
    <div className="header">
        <div className="header-filter">{children}</div>
    </div>
);

const HeaderWithTitle = ({ children }) => (
    <Header>
        <span className="fixed-title">
            <AppTitle />
        </span>
        {children}
    </Header>
);

const Content = () => (
    <div className="content-wrapper">
        <MoviesFilter />
        <Movies />
    </div>
);

const Footer = ({ children }) => <div className="footer">{children}</div>;

const AddMovieBtn = () => {
    return <button className="addmovie">+ add movie</button>;
};

const SearchWidget = () => (
    <div className="search-controls-wrapper">
        <input
            className="search-input"
            placeholder="What do you want to watch?"
        ></input>

        <button className="search-btn">search</button>
    </div>
);
const AppTitle = () => {
    return (
        <>
            <span className="logo">netflix</span>
            <span className="logo">roulete</span>
        </>
    );
};

const MoviesFilter = () => {
    const genres = ["all", "documentary", "comedy", "horror", "crime"];

    return (
        <div className="movies-filters">
            <nav className="movie-filter">
                {genres.map((genre) => (
                    <a key={genre} href={`#${genre}`}>
                        {genre}
                    </a>
                ))}
            </nav>
            <span className="movie-sort">
                <span>sort by</span>
                <select></select>
            </span>
        </div>
    );
};

const Movies = () => {
    return (
        <>
            <div className="movies-container">
                <MoviesErrorBoundary>
                    {movies.map((val, ind) => (
                        <MovieCard key={ind} {...val} />
                    ))}
                </MoviesErrorBoundary>
            </div>
        </>
    );
};

const MoviesErrorBoundary = ({children}) => {
    if (!children || children.length === 0) {
        return <div>
            no movie found
        </div>;
    } else {
        return children;
    }
};

function MovieCard({ imgLink, genres, title, releaseYear }) {
    return (
        <div className="movie-card">
            <img src={imgLink} />
            <div className="movie-info">
                <span className="movie-title">{title}</span>
                <span className="movie-date">{releaseYear}</span>
                <div className="movie-genre">{genres}</div>
            </div>
        </div>
    );
};

MovieCard.propTypes = {
    imgLink: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired
};
