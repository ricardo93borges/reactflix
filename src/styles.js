import styled, { createGlobalStyle } from "styled-components";

const headerHeight = "60px";
const footerHeight = "30px";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
`;

export const Header = styled.header`
  height: ${headerHeight};
  background: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const HeaderTitle = styled.header`
  margin-bottom: 0;
  color: #FFF;
`;

export const Footer = styled.footer`
  height: ${footerHeight};
  background: #333;
`;

export const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`;

export const Container = styled.div`
  min-height: 100%;
`;
