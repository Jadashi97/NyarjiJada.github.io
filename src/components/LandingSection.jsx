import React from 'react';
import { Avatar, Heading, VStack } from '@chakra-ui/react';
import FullScreenSection from "./FullScreenSection";
// import myAvatar from "../assets/myAvatar.jpeg";
import AvatarPic from "../assets/AvatarPic.jpeg";

const greeting = "Hello, I am Nyarji Daniel Jada";
const bio1 = "A FullStack Developer";
const bio2 = "Specialized in Javascript,React & React Native, Express";


const LandingSection = ()=> {
    return(
       <FullScreenSection
            justifyContent="center"
            alignItems="center"
            isDarkBackground
            backgroundColor="#2A4365"
       >
        <VStack spacing={16}>
            <VStack spacing={4} alignItems="center">
                <Avatar
                    src={AvatarPic}
                    size="2xl"
                    name='lokose'
                />
                <Heading as="h4" size="md" noOfLines={1}>
                    {greeting}
                </Heading>
            </VStack>
            <VStack spacing={6}>
                <Heading as="h1" size="3xl" noOfLines={1}>
                    {bio1}
                </Heading>
                <Heading as="h2" size="2xl" noOfLines={2}>
                    {bio2}
                </Heading>
            </VStack>
        </VStack>
       </FullScreenSection>
    );
};

export default LandingSection;