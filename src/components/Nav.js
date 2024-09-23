import React from "react";
import { List, ListItem, Link, Box } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Box as='nav'>
    <List display='flex' gap={5}>
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
