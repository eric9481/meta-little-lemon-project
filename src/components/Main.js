import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import CallToAction from './CallToAction'
import Specials from './Specials'

const Main = () => {
  return (
    <Box as='main'>
      <CallToAction />
      <Specials />
    </Box>
  )
}

export default Main