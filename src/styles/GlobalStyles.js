import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f9f9f9;
    color: #333;
  }

  h1, h2, h3 {
    margin-bottom: 20px;
    color: #555;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
    table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f4f4f4;
  font-weight: bold;
}

td {
  text-align: center;
}

`;

export default GlobalStyles;
