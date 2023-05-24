import React from "react";
import { VStack, Flex, useMediaQuery } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 200px)");

  return (
    <VStack backgroundColor={boxProps.backgroundColor}>
      <VStack maxWidth="1000px" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
