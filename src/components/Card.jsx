import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Heading, HStack, VStack, Image, Text } from "@chakra-ui/react";

const Card = ({ title, description, imageSrc }) => {
    return(
        <VStack
            color="black"
            backgroundColor="white"
            cursor="pointer"
            borderRadius="xl"
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
                    <p><a href="https://github.com/Jadashi97?tab=overview&from=2023-02-01&to=2023-02-10">See more</a></p>
                    <FontAwesomeIcon icon={faArrowRight} size="1x"/>
                </HStack>
            </VStack>
        </VStack>
    );
};

export default Card;

