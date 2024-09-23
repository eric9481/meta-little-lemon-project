import React from "react";
import { Flex } from "@chakra-ui/react";

const FlexContainer = ({ children, type }) => {
  return (
    <Flex
      as={type}
      maxWidth="800px"
      marginX="auto"
      paddingY={2}
      alignItems="center"
      justifyContent="space-between"
    >
      {children}
    </Flex>
  );
};

export default FlexContainer;
