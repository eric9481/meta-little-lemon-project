import React from "react";
import { List, ListItem, Link, Box } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const Nav = () => {
  return (
    <Box as="nav">
      <List display="flex" gap={5} fontSize='1.2rem'>
        <ListItem>
          <Link as={ReactRouterLink} to="/">
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link as={HashLink} smooth to='/#about'>About</Link>
        </ListItem>
        <ListItem>
          <Link as={ReactRouterLink} to='/menu'>Menu</Link>
        </ListItem>
        <ListItem>
          <Link as={ReactRouterLink} to="/bookings">
            Reservations
          </Link>
        </ListItem>
        <ListItem>
          <Link as={ReactRouterLink} to='/order'>Order Online</Link>
        </ListItem>
        <ListItem>
          <Link as={ReactRouterLink} to='/login'>Login</Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Nav;
