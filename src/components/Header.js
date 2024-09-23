import React from "react";
import { Image, Flex, Spacer } from "@chakra-ui/react";
import Logo from "../assets/logo.svg";
import Container from "./Container";
import Nav from "./Nav";

const Header = () => {
  return (
    <Container color="none">
      <Flex
        as="Header"
        maxWidth="800px"
        marginX="auto"
        paddingY={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Image src={Logo} />

        <Nav />
      </Flex>
    </Container>
  );
};

export default Header;
