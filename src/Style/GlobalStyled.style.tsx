import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    body {
        background-color:${(props) => props.theme.colors.background}
    }
`;
