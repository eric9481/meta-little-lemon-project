import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import CallToAction from './CallToAction'
import Specials from './Specials'
import CardComp from './CardComp'
import CardTestimonial from './CardTestimonial'
import Testimonials from './Testimonials'


const Main = () => {
  return (
    <Box as='main'>
      <CallToAction />
      <Specials />
      <Testimonials />
    </Box>
  )
}

export default Main