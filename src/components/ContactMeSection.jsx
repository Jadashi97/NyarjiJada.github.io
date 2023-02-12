import React, { useEffect } from "react";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import { useFormik } from "formik"; //npm package - helps to easily create forms
import * as Yup from 'yup'; //npm package-  this for form validation
import FullScreenSection from "./FullScreenSection";
import { Heading, VStack, Box, FormControl, FormLabel, Input, FormErrorMessage, Select, Textarea, Button } from "@chakra-ui/react";


/** 
* Covers a complete form implementation using formik and yup for validation 
*/ 

const ContactMeSection = () => {
    const {isLoading, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();

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
        <FullScreenSection
            isDarkBackground
            background="#512DA8"
            py={16}
            spacing={8}
        >
            <VStack w="1024px" p={32} alignItems="flex-start">
                <Heading as="h1" id="contactme-section">
                    Contact me
                </Heading>
                <Box p={6} rounded="md" w="100%">
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
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
                            <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                                Submit
                            </Button>   
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </FullScreenSection>
    );
};

export default ContactMeSection;