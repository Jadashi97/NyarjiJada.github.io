import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Heading, HStack, VStack, Button, Text, Link } from "@chakra-ui/react";
import Icon from "@chakra-ui/icon";
import { useMediaQuery } from "@chakra-ui/react";

const Card = ({ title, description, myIcon, imageSrc, linkSrc }) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:200px)");

  return (
    <VStack
      color="black"
      backgroundColor="white"
      boxShadow="lg"
      cursor="pointer"
      borderRadius="xl"
      alignSelf="center"
      mt={isNotSmallerScreen ? "0" : "12"}
      mb={isNotSmallerScreen ? "0" : "12"}
      py={"2.0rem"}
    >
      {/* <Icon color="black" p="4" as={myIcon} w="24" h="24"/> */}
      {/* <Image borderRadius="xl" src={imageSrc} alt={title}/> */}
      <VStack spacing={4} p={2} alignItems="center">
        <p>{myIcon}</p>
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as="h2" size="lg" alignItem="center">
            {title}
          </Heading>
        </HStack>
        <Text color="#64748b" fontSize="lg">
          {description}
        </Text>
      </VStack>
      <HStack spacing={4} alignItems="center">
        <Link color="teal.900" href={linkSrc} alignItem="center" size="lg">
          <Button colorScheme="blue">See More</Button>
        </Link>
      </HStack>
    </VStack>
  );
};

export default Card;
