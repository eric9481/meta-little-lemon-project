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
import { MdDeliveryDining } from "react-icons/md";

const CardComp = ({ data }) => {
  return (
    <Card
      borderRadius="16px"
      overflow="hidden"
      maxWidth="264px"
      bg="brand.300"
    >
      <Image src={data.src} objectFit="cover" />
      <CardBody display='flex' flexDirection='column' flex='1'>
        <Flex justifyContent="space-between" marginBottom={5}>
          <Heading fontWeight="500" fontSize="2rem">
            {data.title}
          </Heading>
          <Text fontWeight="700" color="brand.400">
            {data.price}
          </Text>
        </Flex>
        <Text color="brand.100" marginBottom={5}>
          {data.text}
        </Text>
        <Flex marginTop='auto'>
          <Text fontWeight="700">Order a delivery</Text>
          <Icon as={MdDeliveryDining} boxSize={6} marginLeft={2} />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default CardComp;
