import { List, ListItem, Link, Image, Box, Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/logo.svg";
import Container from "./Container";
import FlexContainer from "./FlexContainer";

const Footer = () => {
  return (
    <Box maxWidth="100%" bg="green.800">
      <Flex
        as="footer"
        maxWidth="800px"
        marginX="auto"
        paddingY={2}
        alignItems='center'
        justifyContent="space-between"
      >
        <Image src={Logo} />
        <Flex gap={20}>
          <List>
            <ListItem>
              <Link>Home</Link>
            </ListItem>
            <ListItem>
              <Link>About</Link>
            </ListItem>
            <ListItem>
              <Link>Menu</Link>
            </ListItem>
            <ListItem>
              <Link>Reservations</Link>
            </ListItem>
            <ListItem>
              <Link>Order Online</Link>
            </ListItem>
            <ListItem>
              <Link>Login</Link>
            </ListItem>
          </List>
          <List>
            <ListItem>Address</ListItem>
            <ListItem>Phone Number</ListItem>
            <ListItem>Email</ListItem>
          </List>
          <List>
            <ListItem>Address</ListItem>
            <ListItem>Phone Number</ListItem>
            <ListItem>Email</ListItem>
          </List>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
