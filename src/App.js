import React from "react";

import "normalize.css";
import "milligram";

import { Header, Footer, Main, GlobalStyle, Container, HeaderTitle } from "./styles.js";
import VideosList from './components/VideosList'
import VideosSingle from "./components/VideosSingle/index.js";
import RegisterVideo from "./components/RegisterVideo/index.js";
import RegisterButton from "./components/RegisterButton/index.js";

function App() {
  return (
    <Container>
      <GlobalStyle />

      <Header>
        <HeaderTitle>Reactflix</HeaderTitle>
        <RegisterButton />
      </Header>

      <Main>
        <RegisterVideo />
        <VideosSingle />
        <VideosList />
      </Main>

      <Footer>&copy; 2019</Footer>
    </Container>
  );
}

export default App;
