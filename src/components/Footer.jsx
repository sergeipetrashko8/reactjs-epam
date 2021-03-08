import styles from "../styles.js";

import styled from "styled-components";
import React from "react";

import { AppTitle } from "./Logo.jsx";

export const Footer = () => {
    return (
        <_Footer>
            <_FlexBoxCenterText>
                <AppTitle />
            </_FlexBoxCenterText>
        </_Footer>
    );
};

const _Footer = styled.div`
    position: fixed;
    bottom: 0;
    display: block;
    width: 70rem;
    height: 5rem;
    background-color: ${styles.colors.gray};
`;

const _FlexBoxCenterText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
