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
  Button,
} from "@chakra-ui/react";
import greekSalad from "../assets/greekSalad.jpg";
import lemonDessert from "../assets/lemonDessert.jpg";
import bruchetta from "../assets/bruchetta.jpg";
import CardComp from "./CardComp";

const data = [
  {
    src: greekSalad,
    title: "Greek Salad",
    text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    price: "$12.99",
  },
  {
    src: lemonDessert,
    title: "Lemon Dessert",
    text: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "$5.00",
  },
  {
    src: bruchetta,
    title: "Bruchetta",
    text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    price: "$5.99",
  },
];

const Specials = () => {
  return (
    <Box width="100%">
      <Box
        as="section"
        maxWidth="860px"
        marginX="auto"
        paddingY={14}
      >
        <Flex justifyContent='space-between' alignItems='center' marginBottom={10}>
          <Heading as='h2' fontWeight='400' fontSize='3.3rem' >Specials</Heading>
          <Button bg='brand.200' size='lg'>Online Menu</Button>
        </Flex>

        <Flex justifyContent='space-between'>
          {data.map((item) => (
            <CardComp key={item.title} data={item} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Specials;
