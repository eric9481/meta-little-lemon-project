import { Center, Heading, Text, Box, Button } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import React from 'react'

const ConfirmedBooking = () => {
  return (
    <Center width="100%" padding='20vh'>
      
        <Box maxWidth='860px' textAlign='center'>
          <Heading
            as="h1"
            fontSize="5.3rem"
            
            fontWeight="400"
            lineHeight="10"
            marginTop='1rem'
          >
            Table Reserved
          </Heading>
          <Heading as="p" fontWeight="400" fontSize="3.3rem">
            See you soon!
          </Heading>
          <Button as={ReactRouterLink} to='/' bg='brand.200' marginTop='3rem' size='lg'>Return Home</Button>
        </Box>
      
    </Center>
  )
}

export default ConfirmedBooking