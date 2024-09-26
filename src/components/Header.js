import React from "react";
import { Image, Flex } from "@chakra-ui/react";
import Logo from "../assets/logo.svg";
import Container from "./Container";
import Nav from "./Nav";
import FlexContainer from "./FlexContainer";

const Header = () => {
  return (
    <Flex
      as='header'
      maxWidth="800px"
      marginX="auto"
      paddingY={2}
      alignItems='center'
      justifyContent="space-between"
    >
      <Image src={Logo} />
      <Nav />
    </Flex>
  );
};

export default Header;
