import { FC } from "react";
import styled from "styled-components";
import { GlobalStyles } from "../styles/globals";
import Header from "./Header";

const Layout: FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header/>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
const Container = styled.div``;