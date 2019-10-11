import React from "react";

import "normalize.css";
import "milligram";

import { Header, Footer, Main, GlobalStyle, Container } from "./styles.js";
import VideosList from './components/VideosList'

function App() {
  return (
    <Container>
      <GlobalStyle />

      <Header>
        <h1>Reactflix</h1>
      </Header>

      <Main>
        <VideosList />
      </Main>

      <Footer>&copy; 2019</Footer>
    </Container>
  );
}

export default App;
