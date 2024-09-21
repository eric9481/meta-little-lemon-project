import React from "react";
import { List, ListItem, UnorderedList, Link, HStack, Box, Text } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Box as='nav'>
      <List display='flex' justifyContent='space-between'> 
        <ListItem><Link>Home</Link></ListItem>
        <ListItem><Link>About</Link></ListItem>
        <ListItem><Link>Menu</Link></ListItem>
        <ListItem><Link>Reservations</Link></ListItem>
        <ListItem><Link>Order Online</Link></ListItem>
        <ListItem><Link>Login</Link></ListItem>
      </List>
    </Box>
  );
};

export default Nav;
