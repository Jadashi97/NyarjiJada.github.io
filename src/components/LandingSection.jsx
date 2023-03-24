import React from 'react';
import { Image, Avatar, Heading, VStack, Text} from '@chakra-ui/react';
import FullScreenSection from "./FullScreenSection";
import { useMediaQuery } from '@chakra-ui/react';
// import myAvatar from "../assets/myAvatar.jpeg";
import AvatarPic from "../assets/AvatarPic.jpeg";

const greeting = "Hello, I am Nyarji Daniel Jada";
const bio1 = "A FullStack Developer inclined more onto the FrontEnd";
const bio2 = "Specialized in Javascript,React & React Native, Express";


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
                    boxSize="270px" src= {AvatarPic} />
                {/* <Avatar
                    src={AvatarPic}
                    size="2xl"
                    name='lokose'
                /> */}
                <Heading fontSize="5xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>
                    {greeting}
                </Heading>
            </VStack>
            <VStack spacing={6}>
                <Heading as="h1" size="2xl" noOfLines={1}>
                    {bio1}
                </Heading>
                <Text as="h2" size="2xl" noOfLines={2}>
                    {bio2}
                </Text>
            </VStack>
        </VStack>
       </FullScreenSection>
    );
};

export default LandingSection;