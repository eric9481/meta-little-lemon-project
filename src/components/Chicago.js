import React from 'react'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import GroupChicagoFix from '../assets/GroupChicagoFix.jpg'

const Chicago = () => {
  return (
    <Flex
      as='section'
      maxWidth="860px"
      marginX="auto"
      paddingTop={20}
      paddingBottom={10}
      alignItems='top'
      justifyContent="space-between"
    >
    <Box marginRight={10} marginTop={4}>
        <Heading id='about' as='h2' fontSize='5rem' fontWeight='500' lineHeight={10}>Little Lemon</Heading>
        <Heading as='p' fontSize='3rem' fontWeight='400' marginBottom={10}>Chicago</Heading>
        <Text color='brand.100'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
    </Box>
    <Image src={GroupChicagoFix} />
    </Flex>
  )
}

export default Chicago