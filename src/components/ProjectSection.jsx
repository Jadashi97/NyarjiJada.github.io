import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading} from "@chakra-ui/react";
import Card from "./Card";
import { GiVolcano, GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { BiChurch } from "react-icons/bi";


const projects = [
    {
        title: "Expense Tracker",
        description: "A handy tracker to help me track my daily expenses.React for the frontend and nodejs for the backend",
        myIcon: <GiTakeMyMoney color="green" size={120}/>,
        // image: {ExpenseTracker},
        // getImageSrc: () => ("/expensetracker.jpeg"),
        // getImageSrc:{ExpenseTracker},
        getlinkSrc: () => ("https://github.com/Jadashi97/personal-Expense-tracker")

    },
    {
        title: "World Volcano Tracker",
        description: "Used React and integrated the Nasa API to locate, find, show and Track any erupting volcanoes around the world",
        myIcon: <GiVolcano color="red" size={120}/>,
        // getImageSrc:  () => ("/volcanoTracker.jpeg"),
        getlinkSrc: () => ("https://github.com/Jadashi97/world-volcano-tracker")

    },
    {
        title: "Restaurant App",
        description: "Built a Mobile restaurant App using React Native for customers to easily look at the menu and order easily",
        myIcon: <MdOutlineFoodBank color="silver" size={120}/>,
        // getImageSrc: () => ("/afrifood.jpeg"),
        getlinkSrc: () => ("https://github.com/Jadashi97/Restaurant-app")

    },
    {
        title: "Church Website",
        description: "Built My Community Church Website so we can communicate and worship better and together as a community",
        myIcon: <BiChurch color="blue" size={120}/>,
        // getImageSrc: () => ("/churchcPic.jpeg"),
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
            <Heading as="h1" id="projects-section" textAlign={"center"} >
                Featured Projects
            </Heading>
            <Box 
                display="grid" 
                gridTemplateColumns="repeat(2,minmax(2,1fr))" 
                gridGap={10} 
            > 
                {projects.map((project) => ( 
                    <Card 
                        key={project.title} 
                        title={project.title} 
                        description={project.description} 
                        myIcon={project.myIcon}
                        linkSrc= {project.getlinkSrc()}
                        // imageSrc={project.getImageSrc()} 
                    /> 
                ))} 
            </Box> 
        </FullScreenSection>
    );
};

export default ProjectSection;
