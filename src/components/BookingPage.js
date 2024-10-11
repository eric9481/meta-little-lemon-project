import { Heading, Box, Flex, Text, Button, Image } from '@chakra-ui/react'
import React from 'react'
import BookingForm from './BookingForm'

const BookingPage = () => {
  return (
    <Box width="100%" bg="brand.100">
      <Flex
        as="section"
        maxWidth="860px"
        marginX="auto"
        paddingY={10}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Heading
            as="h2"
            fontSize="5.3rem"
            color="brand.200"
            fontWeight="400"
            lineHeight="10"
            marginTop='1rem'
          >
            Make a Reservation
          </Heading>
          <Heading as="p" color="white" fontWeight="400" fontSize="3.3rem">
            Skip the Wait
          </Heading>
          <Text
            marginTop="1rem"
            fontWeight="500"
            fontSize="1.5rem"
            color="white"
          >
            Reserve a table online.  With only a few taps you’ll have a booking made in no time. Enjoy your next meal without the delay - reserve now and dine stress-free!
          </Text>
        </Box>
        
      </Flex>
    </Box>
    
  )
}

export default BookingPage