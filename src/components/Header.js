import React from "react";
import { Image, Flex, Link } from "@chakra-ui/react";
import Logo from "../assets/logo.svg";
import Container from "./Container";
import Nav from "./Nav";
import FlexContainer from "./FlexContainer";
import { Link as ReactRouterLink } from 'react-router-dom'

const Header = () => {
  return (
    <Flex
      as='header'
      maxWidth="860px"
      marginX="auto"
      paddingY={2}
      alignItems='center'
      justifyContent="space-between"
    >
      <Link as={ReactRouterLink} to='/'>
      <Image src={Logo}/>      
      </Link>
      <Nav />
    </Flex>
  );
};

export default Header;
