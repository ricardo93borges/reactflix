import React from "react";
import { connect } from 'react-redux'

import "normalize.css";
import "milligram";

import { Main, GlobalStyle, Container } from "./styles.js";
import VideosList from './components/VideosList'
import VideosSingle from "./components/VideosSingle/index.js";
import RegisterVideo from "./components/RegisterVideo/index.js";
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";

function App({ isRegisterVideoFormOpened }) {
  return (
    <Container>
      <GlobalStyle />

      <Header />

      <Main>
        {isRegisterVideoFormOpened && <RegisterVideo />}
        <VideosSingle />
        <VideosList />
      </Main>

      <Footer />

    </Container>
  );
}

const mapStateToProps = state => ({
  isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened
});

export default connect(mapStateToProps)(App);
