import styled from "styled-components";
import React from "react";

import styles from "../styles.js";

const _PinkLogo = styled.span({
    color: styles.colors.pink,
    fontSize: "2rem",
});

const _PinkBoldLogo = styled(_PinkLogo)({
    fontWeight: 600,
});

export const AppTitle = () => (
    <>
        <_PinkBoldLogo>netflix</_PinkBoldLogo>
        <_PinkLogo>roulete</_PinkLogo>
    </>
);
