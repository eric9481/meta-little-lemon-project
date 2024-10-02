import React from "react";
import CardTestimonial from "./CardTestimonial";
import { Box, Flex, Heading } from "@chakra-ui/react";

const testimonials = [
  { name: "John", rating: 5, review: "Great food and friendly staff!" },
  {
    name: "Jack",
    rating: 5,
    review: "I love dinning here, it's become my family's favorite too!",
  },
  {
    name: "Jessica",
    rating: 4,
    review:
      "I really like the atmosphere at the Little Lemon and plan on going back.",
  },
  {
    name: "April",
    rating: 5,
    review: "Highly recommend. One of the best restaurants in Chicago!",
  },
];

const Testimonials = () => {
  return (
    <Box width="100%" bg="brand.100">
      <Box as="section" maxWidth="860px" marginX="auto" paddingY={20}>
        <Heading
          as="h2"
          textAlign="center"
          marginBottom={10}
          fontWeight="500"
          fontSize="3rem"
          color='brand.300'
        >
          Testimonials
        </Heading>
        <Flex justifyContent="space-between">
          {testimonials.map((item) => (
            <CardTestimonial key={item.name} testimonial={item} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Testimonials;
