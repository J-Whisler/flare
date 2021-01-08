import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgray;
    }
}

body {
    font-family: "Montserrat Alternates", sans-serif;
    width: 100%;
}

h2 {
    font-size: 3rem;
    font-family: 'Abel', cursive;
    font-weight: lighter;
    color: #143642;
}

h3 {
    font-size: 1.3rem;
    color: #b76935;
    padding: 1.5rem 0rem;
}

p {
    font-size: 1.2rem;
    line-height: 200%;
    color: #38413f;
}
a {
    text-decoration: none;
    color: #333;

}
`;

export default GlobalStyles;
