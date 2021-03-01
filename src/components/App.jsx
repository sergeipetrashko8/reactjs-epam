import React from "react";
// import "../styles/index.scss";
import PropTypes from "prop-types";
import styled from "styled-components";

const pinkColor = "#f65261";
const whiteColor = "#dedede";
const borderRadius = "0.3rem";
const backgroundColor = "#555555";

const _PinkLogo = styled.span({
    color: pinkColor,
    fontSize: "2rem",
});

const _PinkBoldLogo = styled(_PinkLogo)({
    fontWeight: 600,
});

const movies = [
    {
        title: "Tom and Jerry",
        releaseYear: "2021",
        genres: ["comedy"],
        imgLink:
            "https://static.hdrezka.ac/i/2020/12/24/u04e8b4d16bbbve54s24p.png",
    },
    {
        title: "Monster Hunter",
        releaseYear: "2020",
        genres: ["advanture"],
        imgLink:
            "https://static.hdrezka.ac/i/2021/2/16/vd5198e450627qx26r37j.png",
    },
    {
        title: "Tom and Jerry",
        releaseYear: "2021",
        genres: ["comedy"],
        imgLink:
            "https://static.hdrezka.ac/i/2020/12/24/u04e8b4d16bbbve54s24p.png",
    },
    {
        title: "Monster Hunter",
        releaseYear: "2020",
        genres: ["advanture"],
        imgLink:
            "https://static.hdrezka.ac/i/2021/2/16/vd5198e450627qx26r37j.png",
    },
    {
        title: "Tom and Jerry",
        releaseYear: "2021",
        genres: ["comedy"],
        imgLink:
            "https://static.hdrezka.ac/i/2020/12/24/u04e8b4d16bbbve54s24p.png",
    },
    {
        title: "Monster Hunter",
        releaseYear: "2020",
        genres: ["advanture"],
        imgLink:
            "https://static.hdrezka.ac/i/2021/2/16/vd5198e450627qx26r37j.png",
    },
    {
        title: "Tom and Jerry",
        releaseYear: "2021",
        genres: ["comedy"],
        imgLink:
            "https://static.hdrezka.ac/i/2020/12/24/u04e8b4d16bbbve54s24p.png",
    },
    {
        title: "Monster Hunter",
        releaseYear: "2020",
        genres: ["advanture"],
        imgLink:
            "https://static.hdrezka.ac/i/2021/2/16/vd5198e450627qx26r37j.png",
    },
    {
        title: "Tom and Jerry",
        releaseYear: "2021",
        genres: ["comedy"],
        imgLink:
            "https://static.hdrezka.ac/i/2020/12/24/u04e8b4d16bbbve54s24p.png",
    },
    {
        title: "Monster Hunter",
        releaseYear: "2020",
        genres: ["advanture"],
        imgLink:
            "https://static.hdrezka.ac/i/2021/2/16/vd5198e450627qx26r37j.png",
    },
    {
        title: "Tom and Jerry",
        releaseYear: "2021",
        genres: ["comedy"],
        imgLink:
            "https://static.hdrezka.ac/i/2020/12/24/u04e8b4d16bbbve54s24p.png",
    },
    {
        title: "Monster Hunter",
        releaseYear: "2020",
        genres: ["advanture"],
        imgLink:
            "https://static.hdrezka.ac/i/2021/2/16/vd5198e450627qx26r37j.png",
    },
];

const _AppContainer = styled.div`
    color: ${whiteColor};
    margin: 0 auto;
    width: 70rem;

    @media (min-width: 1140px) {
        margin-top: 3rem;
    }
`;

const _SearchContainer = styled.div`
    margin: auto;
    width: 80%;
    margin: 7rem auto 0;
`;

const _Background = styled.div`
    background-color: ${backgroundColor};
    overflow: auto;
`;

const _FindMovieTitle = styled.h1`
    text-transform: uppercase;
    margin: 0 0 2rem;
    font-weight: 100;
`;

export default function App() {
    return (
        <_Background>
            <_AppContainer>
                <HeaderWithTitle>
                    <_SearchContainer>
                        <_AddMovieBtn>+ add movie</_AddMovieBtn>
                        <_FindMovieTitle>find your movie</_FindMovieTitle>
                        <SearchWidget />
                    </_SearchContainer>
                </HeaderWithTitle>
                <Content />
                <_Footer>
                    <_FlexBoxCenterText>
                        <AppTitle />
                    </_FlexBoxCenterText>
                </_Footer>
            </_AppContainer>
        </_Background>
    );
}

const _FlexBoxCenterText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const _HeaderFilter = styled.div`
    backdrop-filter: blur(2px) brightness(0.4);
    height: 100%;
    overflow: hidden;
`;

const _Header = styled.div`
    height: 25rem;
    margin-bottom: 1rem;
    background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/e178a4e7-4f52-4661-b2ae-41efa25dca7c/eb618394-24cd-43ae-8799-c1a76a7bcbfc/BY-en-20210222-popsignuptwoweeks-perspective_alpha_website_small.jpg");
    background-size: cover;
    background-position: center;
`;

const Header = ({ children }) => (
    <_Header>
        <_HeaderFilter>{children}</_HeaderFilter>
    </_Header>
);

const _FixedTitle = styled.span`
    position: absolute;
    top: 1rem;
    left: 2rem;
`;

const HeaderWithTitle = ({ children }) => (
    <Header>
        <_FixedTitle>
            <AppTitle />
        </_FixedTitle>
        {children}
    </Header>
);


const _ContentWrapper = styled.div`
    min-height: 100vh;
    background-color: #232323;
    padding: 0 3rem 0 3rem;
    overflow: hidden;
    margin-bottom: 5rem;
`;

const Content = () => (
    <_ContentWrapper>
        <MoviesFilter />
        <Movies />
    </_ContentWrapper>
);

const _Footer = styled.div`
    position: fixed;
    bottom: 0;
    display: block;
    width: 70rem;
    height: 5rem;
    background-color: #424242;
`;

const _AddMovieBtn = styled.button`
    text-transform: uppercase;
    color: ${pinkColor};
    border: none;
    font-size: larger;
    background-color: rgba(90, 90, 90, 0.7);
    float: right;
    border-radius: ${borderRadius};
    padding: 1rem;
    font-weight: 500;
    transition: all 0.3s;
    &:hover {
        -webkit-box-shadow: 0px 0px 25px 1px rgba(${pinkColor}, 0.7);
        box-shadow: 0px 0px 25px 1px rgba(${pinkColor}, 0.7);
        background-color: rgba(90, 90, 90, 1);
    }
`;

const _SearchBtn = styled.button`
    background-color: ${pinkColor};
    color: ${whiteColor};
    background-color: #f65261;
    font-size: 1.6rem;
    border-radius: ${borderRadius};
    text-transform: uppercase;
    border: initial;
    width: 28%;
    height: 4rem;
    float: right;
`;

const _SearchInput = styled.input`
    background: rgba(0, 0, 0, 0.7);
    font-size: 1.2rem;
    height: 4rem;
    border: initial;
    border-radius: ${borderRadius};
    width: 67%;
    color: ${whiteColor};
    padding: 0 1rem;

    &:hover {
        box-shadow: 0 0 15px 3px ${pinkColor};
    }

    &:focus {
        box-shadow: inset 0 0 8px 0px #f65261;
        outline: none;
    }
`;


const SearchWidget = () => (
    <div className="search-controls-wrapper">
        <_SearchInput
            placeholder="What do you want to watch?"
        ></_SearchInput>

        <_SearchBtn>search</_SearchBtn>
    </div>
);
const AppTitle = () => {
    return (
        <>
            <_PinkBoldLogo>netflix</_PinkBoldLogo>
            <_PinkLogo>roulete</_PinkLogo>
        </>
    );
};


const _MoviesHeader = styled.div`
    border-bottom-style: solid;
    border-bottom-color: #424242;
    margin: 1rem 0;
    padding-bottom: 1rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #aaaaaa;
`;

const _MoviesNav = styled.nav`
    display: inline;

    a {
      text-decoration: none;
      font-weight: 500;
      margin: 0 1rem;
      position: relative;
      color: ${whiteColor};
  
      &::after {
        content: "";
        position: absolute;
        bottom: -0.2rem;
        left: 0;
        width: 0;
        border-top: solid ${whiteColor} 0.2rem;
        transition: width 0.5s;
      }
  
      &:active {
        color: ${pinkColor};
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

const MoviesFilter = () => {
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
            <span className="movie-sort">
                <span>sort by</span>
                <select></select>
            </span>
        </_MoviesHeader>
    );
};

const _MoviesContainer = styled.div`
    display: flex;
    color: #989898;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Movies = () => {
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

const MoviesErrorBoundary = ({ children }) => {
    if (!children || children.length === 0) {
        return <div>no movie found</div>;
    } else {
        return children;
    }
};

const _MovieInfo = styled.div({
    padding: "1rem",
    borderRadius: borderRadius,
});

const _MovieTitle = styled.span({
    fontWeight: 500,
    fontSize: "1.2rem",
});

const _MovieDate = styled.span({
    float: "right",
    border: `0.1rem solid ${backgroundColor}`,
    padding: "0.3rem 1.5rem",
    borderRadius: borderRadius,
});

const _MovieGenre = styled.div({
    marginTop: "0.8rem",
    textTransform: "capitalize",
});

const _MovieImage = styled.img({
    height: "30rem",
    width: "20rem",
    borderRadius: borderRadius,
});

const _MovieCard = styled.div`
    transition: all 0.5s;
    margin-bottom: 2rem;
    border-style: solid;
    border-color: #232323;
    border-radius: ${borderRadius};

    &:hover {
        box-shadow: 0px 0px 20px 4px ${pinkColor};
    }
`;

const MovieCard = ({ imgLink, genres, title, releaseYear }) => {
    return (
        <_MovieCard>
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
    releaseYear: PropTypes.number.isRequired
};
