import React from "react";
import styled from "styled-components";

import styles from "../styles.js";

import { _PinkLogo, _PinkBoldLogo } from "./Logo.jsx";
import { Footer } from "./Footer.jsx";
import { AppHeader } from "./Header.jsx";
import { Content } from "./Content.jsx";

export default function App() {
    return (
        <_Background>
            <_AppContainer>
                <AppHeader/>
                <Content />
                <Footer/>
            </_AppContainer>
        </_Background>
    );
}

const _Background = styled.div`
    background-color: ${styles.colors.lightGray};
    overflow: auto;
`;

const _AppContainer = styled.div`
    color: ${styles.colors.white};
    margin: 0 auto;
    width: 70rem;

    @media (min-width: 1140px) {
        margin-top: 3rem;
    }
`;
