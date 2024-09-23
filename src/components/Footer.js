import { Container, List, ListItem, Link, Image, Box } from '@chakra-ui/react'
import React from 'react'
import Logo from '../assets/logo.svg'

const Footer = () => {

  return (
      <Box as='footer' display='flex' gap={20}>
        <Image src={Logo} />
        <List>
          <ListItem><Link>Home</Link></ListItem>
          <ListItem><Link>About</Link></ListItem>
          <ListItem><Link>Menu</Link></ListItem>
          <ListItem><Link>Reservations</Link></ListItem>
          <ListItem><Link>Order Online</Link></ListItem>
          <ListItem><Link>Login</Link></ListItem>
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
      </Box>
  )
}

export default Footer