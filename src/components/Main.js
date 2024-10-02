import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import CallToAction from './CallToAction'
import Specials from './Specials'
import CardComp from './CardComp'
import CardTestimonial from './CardTestimonial'
import Testimonials from './Testimonials'
import Chicago from './Chicago'


const Main = () => {
  return (
    <Box as='main'>
      <CallToAction />
      <Specials />
      <Testimonials />
      <Chicago />
    </Box>
  )
}

export default Main