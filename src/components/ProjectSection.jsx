import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import { GiVolcano, GiTakeMyMoney } from "react-icons/gi";
import { RiNetflixFill } from "react-icons/ri";
import { BsCurrencyExchange } from "react-icons/bs";
import { MdOutlineFoodBank } from "react-icons/md";
import { BiChurch } from "react-icons/bi";
import { FcCalculator } from "react-icons/fc";

const projects = [
  {
    title: "Expense Tracker",
    description:
      "A handy tracker to help me track my daily expenses.React for the frontend and nodejs for the backend",
    myIcon: <GiTakeMyMoney color="green" size={120} />,
    getlinkSrc: () => "https://tracking-expenditures.netlify.app/",
  },
  {
    title: "Tip Calculator",
    description:
      "Built a Tip calculator that you can use to split the bill equally among a group of friends. Click the Link and try it yourself",
    myIcon: <FcCalculator color="Green" size={120} />,
    getlinkSrc: () => "https://personal-tippincalc.netlify.app/",
  },
  {
    title: "Netflix-Clone",
    description:
      "Using React and Firebase to cement the front end and also spark the idea of providing streaming services to my beloved south Sudanese",
    myIcon: <RiNetflixFill color="red" size={120} />,
    getlinkSrc: () => "https://sollywoood-netflixclone.netlify.app/",
  },
  {
    title: "Currency Converter",
    description:
      "Built in React to learn how to integrate the free currency API and easily do currency conversion",
    myIcon: <BsCurrencyExchange color="gold" size={120} />,
    getlinkSrc: () => "https://rasulu-converter.netlify.app/",
  },
  {
    title: "Church Website",
    description:
      "Built My Community Church Website so we can communicate and worship better and together as a community",
    myIcon: <BiChurch color="silver" size={120} />,
    getlinkSrc: () => "https://southsudanchurch.com/",
  },
];

const ProjectSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#1f7842"
      isDarkBackground
      p={8}
      spacing={8}
    >
      <Heading as="h1" id="projects-section" alignItems={"center"}>
        Featured Projects
      </Heading>
      <Box
        display="grid"
        // gridTemplateColumns="repeat(1,minmax(4,2fr))"
        gridGap={10}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            myIcon={project.myIcon}
            linkSrc={project.getlinkSrc()}
            // imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectSection;
