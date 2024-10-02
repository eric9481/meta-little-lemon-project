import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import CallToAction from './CallToAction'
import Specials from './Specials'
import CardComp from './CardComp'


const Main = () => {
  return (
    <Box as='main'>
      <CallToAction />
      <Specials />
    </Box>
  )
}

export default Main