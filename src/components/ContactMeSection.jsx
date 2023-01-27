import React from "react";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import { useFormik } from "formik"; //helps to easily create forms
import * as Yup from 'yup'; // this for form validation
import FullScreenSection from "./FullScreenSection";
import { Heading, VStack, Box, FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";


/** 
* Covers a complete form implementation using formik and yup for validation 
*/ 
const ContactMeSection = () => {
    const {isLoading, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();

    // we use formik to set up the input form
    const Formik = useFormik({
        initialValues: {
            firstName: " ",
            email: "",
            type: "hireMe",
            comment: " ",        
        }, 
        onSubmit: (values) => {
            submit(" ", values);
        },
        validationSchema: Yup.object({ // validating forms
            firstName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            comment: Yup.string()
             .min(25, "Must be atleast 25 characters")
             .required("Required"),
        }),
    });

    return(
        <FullScreenSection>
            <VStack>
                <Heading>

                </Heading>
                <Box>
                    <form onSubmit={}>
                        <VStack>
                            <FormControl>
                                <FormLabel></FormLabel>  
                                <Input/>
                                <FormErrorMessage></FormErrorMessage>
                            </FormControl>   
                            <FormControl>
                                <FormLabel></FormLabel>  
                                <Input/>
                                <FormErrorMessage></FormErrorMessage>
                            </FormControl>   
                            <FormControl>
                                <FormLabel></FormLabel>  
                                <Input/>
                                <FormErrorMessage></FormErrorMessage>
                            </FormControl>   
                            <FormControl>
                                <FormLabel></FormLabel>  
                                <Input/>
                                <FormErrorMessage></FormErrorMessage>
                            </FormControl>   
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </FullScreenSection>
    )
}

export default ContactMeSection;