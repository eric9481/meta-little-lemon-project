import { List, ListItem, Link, Image, Box, Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/logo.svg";
import logoVar from "../assets/logoVar.jpg"
import Container from "./Container";
import FlexContainer from "./FlexContainer";

const Footer = () => {
  return (
    <Box maxWidth="100%" bg="brand.100">
      <Flex
        as="footer"
        maxWidth="860px"
        marginX="auto"
        paddingY={2}
        alignItems='center'
        justifyContent="space-between"
      >
        <Image src={logoVar} />
        
          <Flex gap={32} marginTop={5} color='brand.300'>
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
