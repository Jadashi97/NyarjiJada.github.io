import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Image} from "@chakra-ui/react";
import Card from "./Card";
import giving from "../assets/giving.jpg";
import afrifood from "../assets/afrifood.png";
import chillies from "../assets/chillies.png";
import cover from "../assets/cover.png";

const projects = [
    {
        title: "Expense Tracker",
        description: "A handy tracker to help me track my everyDay expenses. <br/> built using React for the frontend and nodejs for the backend",
        getImageSrc:() => ("../assets/myAvatar.jpeg"),
    },
    {
        title: "World Volcano Tracker",
        description: "Used React and integrated the Nasa API to show erupting volcanoes around the world",
        getImageSrc:  () => ("../assets/myAvatar.jpeg"),
    },
    {
        title: "Restaurant App",
        description: "Built a Mobile restaurant App using React Native for customer to easily look at the menu",
        getImageSrc: () => ("../assets/giving.jpg"),
    },
    {
        title: "Church Website",
        description: "Built a Church Website for my community Church So we can show case any happening events",
        getImageSrc: () => ("../assets/giving.jpg"),
    }
]



const ProjectSection = () => {
    return(
        <FullScreenSection
            backgroundColor="#14532d"
            isDarkBackground 
            p={8}
            alignItems="flex-start"
            spacing={8}
        >
            <Heading as="h1" id="projects-section">
                Featured Projects
            </Heading>
            <Box 
                display="grid" 
                gridTemplateColumns="repeat(2,minmax(0,1fr))" 
                gridGap={8} 
            > 
                {projects.map((project) => ( 
                    <Card 
                        key={project.title} 
                        title={project.title} 
                        description={project.description} 
                        url="https://github.com/Jadashi97" 
                        imageSrc={project.getImageSrc()} 
                    /> 
                ))} 
            </Box> 
        </FullScreenSection>
    );
};

export default ProjectSection;
