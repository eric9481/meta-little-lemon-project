import React from 'react'
import { Box } from '@chakra-ui/react'

const Container = ({children, color}) => {
  return (
    <Box maxWidth='100%' bg={color}>
      {children}
    </Box>
  )
}

export default Container