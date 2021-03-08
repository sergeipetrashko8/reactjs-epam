import { AppTitle } from "./Logo.jsx";

import styles from "../styles.js";

import React from 'react';
import styled from "styled-components";


const _FixedTitle = styled.span`
    position: absolute;
    top: 1rem;
    left: 2rem;
`;

export const AppHeader = () => (
    <HeaderWithTitle>
        <_SearchContainer>
            <_AddMovieBtn>+ add movie</_AddMovieBtn>
            <_FindMovieTitle>find your movie</_FindMovieTitle>
            <SearchWidget />
        </_SearchContainer>
    </HeaderWithTitle>
);

const _Header = styled.div`
    height: 25rem;
    margin-bottom: 1rem;
    background-image: url(${(props) => props.imgUrl});
    background-size: cover;
    background-position: center;
`;

const Header = ({ children }) => (
    <_Header imgUrl="https://assets.nflxext.com/ffe/siteui/vlv3/e178a4e7-4f52-4661-b2ae-41efa25dca7c/eb618394-24cd-43ae-8799-c1a76a7bcbfc/BY-en-20210222-popsignuptwoweeks-perspective_alpha_website_small.jpg">
        <_HeaderFilter>{children}</_HeaderFilter>
    </_Header>
);

const _HeaderFilter = styled.div`
    backdrop-filter: blur(2px) brightness(0.4);
    height: 100%;
    overflow: hidden;
`;


const _SearchContainer = styled.div`
    margin: auto;
    width: 80%;
    margin: 7rem auto 0;
`;

const _FindMovieTitle = styled.h1`
    text-transform: uppercase;
    margin: 0 0 2rem;
    font-weight: 100;
`;


const _AddMovieBtn = styled.button`
    text-transform: uppercase;
    color: ${styles.colors.pink};
    border: none;
    font-size: larger;
    background-color: rgb(90, 90, 90);
    opacity: 0.7;
    float: right;
    border-radius: ${styles.dimensions.borderRadius};
    padding: 1rem;
    font-weight: 500;
    transition: box-shadow 0.3s, opacity 0.3s;
    &:hover {
        box-shadow: 0px 0px 25px 1px ${styles.colors.pink};
        opacity: 1;
    }
`;


const _SearchBtn = styled.button`
    background-color: ${styles.colors.pink};
    color: ${styles.colors.white};
    font-size: 1.6rem;
    border-radius: ${styles.dimensions.borderRadius};
    text-transform: uppercase;
    border: initial;
    width: 28%;
    height: 4rem;
    float: right;
`;

const _SearchInput = styled.input`
    background: rgb(0, 0, 0);
    opacity: 0.7;
    font-size: 1.2rem;
    height: 4rem;
    border: initial;
    border-radius: ${styles.dimensions.borderRadius};
    width: 67%;
    color: ${styles.colors.white};
    padding: 0 1rem;

    &:hover {
        box-shadow: 0 0 15px 3px ${styles.colors.pink};
    }

    &:focus {
        box-shadow: inset 0 0 8px 0px ${styles.colors.pink};
        outline: none;
    }
`;

const SearchWidget = () => (
    <>
        <_SearchInput placeholder="What do you want to watch?"></_SearchInput>
        <_SearchBtn>search</_SearchBtn>
    </>
);

const HeaderWithTitle = ({ children }) => (
    <Header>
        <_FixedTitle>
            <AppTitle />
        </_FixedTitle>
        {children}
    </Header>
);
