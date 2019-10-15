import styled from "styled-components";

const headerHeight = "60px";

export const Container = styled.header`
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
  font-size: 2em;
`;