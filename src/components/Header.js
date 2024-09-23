import React from "react";
import { Image } from "@chakra-ui/react";
import Logo from "../assets/logo.svg";
import Container from "./Container";
import Nav from "./Nav";
import FlexContainer from "./FlexContainer";

const Header = () => {
  return (
    <Container color="none">
      <FlexContainer type="header">
        <Image src={Logo} />
        <Nav />
      </FlexContainer>
    </Container>
  );
};

export default Header;
