import React from "react";

import { Header, Footer, Main, GlobalStyle, Container } from "./styles.js";

import "normalize.css";
import "milligram";

function App() {
  return (
    <Container>
      <GlobalStyle />

      <Header>
        <h1>Reactflix</h1>
      </Header>

      <Main>Content</Main>

      <Footer>&copy; 2019</Footer>
    </Container>
  );
}

export default App;
