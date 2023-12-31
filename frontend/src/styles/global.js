import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    background-color: rgb(248, 247, 247);
    font-family: 'Mulish', sans-serif;
    font-family: 'Open Sans', sans-serif;
    font-family: 'Roboto', sans-serif;
}

a {
    text-decoration: none;
}

li {
    list-style-type: none;
}
`;
