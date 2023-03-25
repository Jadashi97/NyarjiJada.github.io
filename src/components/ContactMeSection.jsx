import React, { useEffect } from "react";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import { useFormik } from "formik"; //npm package - helps to easily create forms
import * as Yup from 'yup'; //npm package-  this for form validation
import FullScreenSection from "./FullScreenSection";
import { useMediaQuery } from '@chakra-ui/react';
import { Heading, VStack, Box, FormControl, FormLabel, Input, FormErrorMessage, Select, Textarea, Button } from "@chakra-ui/react";


/** 
* Covers a complete form implementation using formik and yup for validation 
*/ 

const ContactMeSection = () => {
    const {isLoading, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");  // for responsive design

    // we use formik to set up the input form
    const formik = useFormik({
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
             .min(15, "Must be atleast 15 characters")
             .required("Required"),
        }),
    });

    useEffect(() => {
        if(response){
            onOpen(response.type, response.message);
            if(response.type === 'succcess') {
                formik.resetForm();
            }
        }
    }, [response])

    return(
        <VStack
            alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
            mb={isNotSmallerScreen ? "0" : "12"} 
            borderRadius='full'
            backgroundColor="transparent" boxShadow="full"
            background="#3f92ab"
            isDarkBackground
            p={16}
            // alignItems="flext-start"
            spacing={8}
        >
            <VStack w="1024px" p={28} //alignItems="flex-start"
            >
                <Heading as="h1" id="contactme-section" color={"white"}>
                    Contact me
                </Heading>
                <Box p={8} rounded="md" //w="100%"

                    alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                >
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4} color={"white"}>
                            <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                                <FormLabel htmlFor="firstName">Name</FormLabel>  
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    {...formik.getFieldProps("firstName")}
                                />
                                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                            </FormControl>   
                            <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                                <FormLabel htmlFor="email">Email Address</FormLabel>  
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    {...formik.getFieldProps("email")}
                                />
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            </FormControl>   
                            <FormControl>
                                <FormLabel htmlFor="type">Type of enquiry</FormLabel>  
                                <Select id="type" name="type" {...formik.getFieldProps("type")}>
                                    <option value="hireMe">Freelance Project proposal</option>
                                    <option value="openSource">Open Source Consultancy Session</option>
                                    <option value="other">Other</option>
                                </Select>
                            </FormControl>   
                            <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                                <FormLabel htmlFor="comment">Your message</FormLabel>  
                                <Textarea
                                    id="comment"
                                    name="comment"
                                    height={250}
                                    {...formik.getFieldProps("comments")}
                                />
                                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                            </FormControl>
                            <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading} mt={4}>
                                Submit
                            </Button>   
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </VStack>
    );
};

export default ContactMeSection;