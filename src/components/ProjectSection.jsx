import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading} from "@chakra-ui/react";
import Card from "./Card";

const projects = [
    {
        title: "Expense Tracker",
        description: "A handy tracker to help me track my everyDay expenses.Built using React for the frontend and nodejs for the backend",
        getImageSrc: () => ("src/assets/expensetracker.jpeg"),
    },
    {
        title: "World Volcano Tracker",
        description: "Used React and integrated the Nasa API to show erupting volcanoes around the world",
        getImageSrc:  () => ("src/assets/volcanoTracker.jpeg"),
    },
    {
        title: "Restaurant App",
        description: "Built a Mobile restaurant App using React Native for customer to easily look at the menu",
        getImageSrc: () => ("src/assets/afrifood.jpeg"),
    },
    {
        title: "Church Website",
        description: "Built a Church Website for my community Church So we can show case any happening events",
        getImageSrc: () => ("src/assets/churchcPic.jpeg"),
        href: () => ("https://southsudanchurch.com/")
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
                        href= {"https://southsudanchurch.com/"}
                        imageSrc={project.getImageSrc()} 
                    /> 
                ))} 
            </Box> 
        </FullScreenSection>
    );
};

export default ProjectSection;
