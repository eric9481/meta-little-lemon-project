import { List, ListItem, Link, Image, Box, Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/logo.svg";
import Container from "./Container";
import FlexContainer from "./FlexContainer";

const Footer = () => {
  return (
    <Container color="green.800">
      <FlexContainer type="footer">
        <Image src={Logo} />
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
      </FlexContainer>
    </Container>
  );
};

export default Footer;
