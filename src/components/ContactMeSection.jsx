import React, { useEffect } from "react";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import { useFormik } from "formik"; //npm package - helps to easily create forms
import * as Yup from "yup"; //npm package-  this for form validation
import FullScreenSection from "./FullScreenSection";
import { useMediaQuery } from "@chakra-ui/react";
import {
  Heading,
  VStack,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";

/**
 * Covers a complete form implementation using formik and yup for validation
 */

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const [isNotSmallerScreen] = useMediaQuery("(min-width:200px)"); // for responsive design

  // we use formik to set up the input form
  const formik = useFormik({
    initialValues: {
      firstName: " ",
      lastName: " ",
      email: "",
      type: "hireMe",
      comment: " ",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      //   submit(" ", values);
    },
    validationSchema: Yup.object({
      // validating forms
      firstName: Yup.string()
        .required("Required")
        .min(2, "Too Short!")
        .max(50, "Too long!"),
      email: Yup.string().email("Invalid email address").required("Required"),
      comment: Yup.string()
        //  .min(10, "Must be atleast 10 characters")
        .required("Required"),
      acceptedTerms: Yup.boolean()
        .required("Required")
        .oneOf([true], "You must accept the terms and conditions."),
      jobType: Yup.string()
        // specify the set of valid values for job type
        // @see http://bit.ly/yup-mixed-oneOf
        .oneOf(
          ["designer", "development", "product", "other"],
          "Invalid Job Type"
        )
        .required("Required"),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);

  return (
    <VStack
      alignSelf="center"
      // mt={isNotSmallerScreen ? "0" : "12"}
      // mb={isNotSmallerScreen ? "0" : "12"}
      backgroundColor="transparent"
      boxShadow="full"
      background="#3f92ab"
      // isDarkBackground
      p={16}
      spacing={8}
    >
      <VStack>
        <Heading as="h1" id="contactme-section" color={"white"}>
          Contact me
        </Heading>
        <Box
          p={8}
          w={"md"}
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
        >
          <form
            onSubmit={formik.handleSubmit}
            alignSelf="center"
            mt={isNotSmallerScreen ? "0" : "12"}
            mb={isNotSmallerScreen ? "0" : "12"}
            // borderRadius="full"
          >
            <VStack spacing={4} color={"white"}>
              <FormControl
                isInvalid={
                  !!formik.errors.firstName && formik.touched.firstName
                }
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.email && formik.touched.email}
              >
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
                <FormLabel htmlFor="type">Select a Job Type</FormLabel>
                <Select label="Job Type" name="jobType">
                  <option value="">Select a job type</option>
                  <option value="designer">Designer</option>
                  <option value="development">Developer</option>
                  <option value="product">Open Source Projects</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.comment && formik.touched.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  type="text"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comments")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="green"
                width="full"
                isLoading={isLoading}
                mt={4}
              >
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
