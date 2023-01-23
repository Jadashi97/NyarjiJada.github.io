import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
    {
        icon: faEnvelope,
        url: "mailto: lojuan247@gmail.com",
    },
    {
        icon: faGithub,
        url: "https://github.com/Jadashi97",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/nyarji-d-jada-182bb8177/"
    }
]

/** 
* This component illustrates the use of both the useRef hook and useEffect hook. 
* The useRef hook is used to create a reference to a DOM element, in order to tweak the header styles and run a transition animation. 
* The useEffect hook is used to perform a subscription when the component is mounted and to unsubscribe when the component is unmounted. 
* Additionally, it showcases a neat implementation to smoothly navigate to different sections of the page when clicking on the header elements. 
*/ 
const Header = () => {
    const headerRef = useRef(null);

    useEffect(()=> {
        let prevScrollPos = window.scrollY;

        const handleScroll = () =>{
            const currentScrolPos = window.scrollY;
            const headerElement = headerRef.current;

            if(!headerElement){
                return;
            }
            if(prevScrollPos > currentScrolPos){
                headerElement.style.transform = "translate(0)";
            }else {
                headerElement.style.transform = "translate(-200px)";
            }
            prevScrollPos = currentScrolPos;
        }
        window.addEventListener('scroll', handleScroll)

        return ()=> {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const handleClick = (anchor)=> () =>  {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if(element){
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };


    return (
        <div>
        
        </div>
    )
}

export default Header
