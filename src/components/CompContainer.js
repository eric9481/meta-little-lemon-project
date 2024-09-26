import React from "react";
import { Box } from "@chakra-ui/react";

const CompContainer = ({ color, type, children }) => {
  return (
    <Box maxWidth="100%" bg={color}>
      <Box as={type} maxWidth="800px" marginX="auto" paddingY={2}  >
        {children}
      </Box>
    </Box>
  );
};

export default CompContainer;
