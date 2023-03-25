import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading} from "@chakra-ui/react";
import Card from "./Card";


const projects = [
    {
        title: "Expense Tracker",
        description: "A handy tracker to help me track my everyDay expenses.Built using React for the frontend and nodejs for the backend",
        getImageSrc: () => ("public/expensetracker.jpeg"),
        getlinkSrc: () => ("https://github.com/Jadashi97/personal-Expense-tracker")

    },
    {
        title: "World Volcano Tracker",
        description: "Used React and integrated the Nasa API to show and Track any erupting volcanoes around the world",
        getImageSrc:  () => ("public/volcanoTracker.jpeg"),
        getlinkSrc: () => ("https://github.com/Jadashi97/world-volcano-tracker")

    },
    {
        title: "Restaurant App",
        description: "Built a Mobile restaurant App using React Native for customer to easily look at the menu",
        getImageSrc: () => ("public/afrifood.jpeg"),
        getlinkSrc: () => ("https://github.com/Jadashi97/Restaurant-app")

    },
    {
        title: "Church Website",
        description: "Built My Community Church Website so we can communicate and worship better and together as a community",
        getImageSrc: () => ("public/churchcPic.jpeg"),
        getlinkSrc: () => ("https://southsudanchurch.com/")
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
                        linkSrc= {project.getlinkSrc()}
                        imageSrc={project.getImageSrc()} 
                    /> 
                ))} 
            </Box> 
        </FullScreenSection>
    );
};

export default ProjectSection;
