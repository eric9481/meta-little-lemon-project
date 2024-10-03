import React from "react";
import { Box, Heading, Flex, Image, Text, Link, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import food from "../assets/restauranfoodfixed.jpg";

const CallToAction = () => {
  return (
    <Box width="100%" bg="brand.100">
      <Flex
        as="section"
        maxWidth="860px"
        marginX="auto"
        paddingY={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Heading
            as="h1"
            fontSize="5.3rem"
            color="brand.200"
            fontWeight="400"
            lineHeight="10"
            marginTop='1rem'
          >
            Little Lemon
          </Heading>
          <Heading as="p" color="white" fontWeight="400" fontSize="3.3rem">
            Chicago
          </Heading>
          <Text
            marginTop="1rem"
            fontWeight="500"
            fontSize="1.5rem"
            color="white"
          >
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Text>
          <Button as={ReactRouterLink} to='/bookings' bg='brand.200' marginTop='3rem' size='lg'>Reserve a Table</Button>
        </Box>
        <Image src={food} boxSize="md" borderRadius="16px" />
      </Flex>
    </Box>
  );
};

export default CallToAction;
