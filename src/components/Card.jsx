import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Heading, HStack, VStack, Image, Text, Link } from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/react';


const Card = ({ title, description, imageSrc, linkSrc }) => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return(
        <VStack
            color="black"
            backgroundColor="white"
            boxShadow="lg"
            cursor="pointer"
            borderRadius="xl"
            alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
            mb={isNotSmallerScreen ? "0" : "12"} 
                // backgroundColor="transparent" boxShadow="lg"
                // boxSize="250px"
        >
            <Image borderRadius="xl" src={imageSrc} alt={title}/>
            <VStack spacing={4} p={4} alignItems="flex-start">
                <HStack justifyContent="space-between" alignItems="center">
                    <Heading as="h3" size="md">
                        {title}
                    </Heading>
                </HStack>
                <Text color="#64748b" fontSize="lg">
                    {description}
                </Text>
                <HStack spacing={2} alignItems="center">
                    <Link color='teal.300' href={linkSrc} >See More</Link>
                </HStack>
            </VStack>
        </VStack>
    );
};

export default Card;

