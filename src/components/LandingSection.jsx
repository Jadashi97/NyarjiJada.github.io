import React from 'react';
import { Image, Avatar, Heading, VStack, Text} from '@chakra-ui/react';
import FullScreenSection from "./FullScreenSection";
import { useMediaQuery } from '@chakra-ui/react';
// import myAvatar from "../assets/myAvatar.jpeg";
import AvatarPic from "../assets/AvatarPic.jpeg";
import MyImage from "../assets/MyImage.jpeg";

const greeting = "Hi, I am Nyarji Daniel Jada";
const bio1 = "A Proficient FullStack/FrontEnd Developer ";
const bio2 = "Specialized in Javascript,React, React Native, NodeJs, Express, MongoDB, MySQL, WordPress";


const LandingSection = ()=> {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return(
       <FullScreenSection
            justifyContent="center"
            alignItems="center" 
            isDarkBackground
            backgroundColor="#202730"
       >
        <VStack spacing={16}>
            <VStack spacing={4} alignItems="center">
            <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                backgroundColor="transparent" boxShadow="lg"
                boxSize="250px" src= {MyImage} 
            />

                <Heading fontSize="5xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>
                    {greeting}
                </Heading>
            </VStack>
            <VStack spacing={4}>
                <Heading as="h5" size="2xl" noOfLines={4}>
                    {bio1}
                </Heading>
                <Text as="h1" size="5xl" noOfLines={2}>
                    {bio2}
                </Text>
            </VStack>
        </VStack>
       </FullScreenSection>
    );
};

export default LandingSection;