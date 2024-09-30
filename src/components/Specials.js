import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import greekSalad from '../assets/greekSalad.jpg'

const data = [
    {src: greekSalad, title: 'Greek Salad'}
]

const Specials = () => {
  return (
    <Box>
      {data.map(item => (
        <Card>
            <Image boxSize='100px' src={item.src} />
        </Card>
      ))}
    </Box>
  );
};

export default Specials;
