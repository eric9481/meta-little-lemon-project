import {
    AspectRatio,
    Card,
    CardBody,
    CardHeader,
    Image,
    Text,
    Box,
    Heading,
    Flex,
    Icon,
    Spacer,
  } from "@chakra-ui/react";
  import React from "react";
  import greekSalad from "../assets/greekSalad.jpg";
  import lemonDessert from "../assets/lemonDessert.jpg";
  import { CgProfile } from "react-icons/cg";
  import { FaStar } from "react-icons/fa";
  
  
  const CardComp = ({testimonial}) => {
    return (
      <Card
        borderRadius="16px"
        width="200px"
      >
        <CardBody>
        {Array(testimonial.rating)
          .fill("")
          .map((_, i) => (
            <Icon key={i} as={FaStar} boxSize={5} color="brand.200" />
          ))}
            <Flex alignItems='center' marginY={2}>
                <Icon as={CgProfile} boxSize={10} marginRight={2} />
                <Text fontWeight='700'>{testimonial.name}</Text>
            </Flex>
            <Text>{testimonial.review}</Text>
        </CardBody>
      </Card>
    );
  };
  
  export default CardComp;