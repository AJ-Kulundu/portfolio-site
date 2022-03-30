import React from "react";
import {
  Flex,
  Stack,
  Input,
  Button,
  FormControl,
  VStack,
  useToast,
  FormErrorMessage,
  Textarea,
  Heading,
  Text,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Your name is required"),
  email: Yup.string().email("Invalid email").required("Your email is required"),
  subject: Yup.string().required("A subject is required"),
  message: Yup.string().required("A message is required"),
});
function Contact() {
  const toast =useToast();
  return (
    <Flex>
      <Stack minH={"80vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} justify={"center"} align={"center"}>
          <Stack spacing={4} w={"full"} maxW={"lg"}>
            <Heading>Contact me</Heading>
            <Text>
              {" "}
              I am interested in working on projects, especially large and
              ambitious projects. You can also contact me for other questions
              and requests using the form below.{" "}
            </Text>
            <Formik
              initialValues={{ name: "", email: "", subject: "", message: "" }}
              validationSchema={ContactSchema}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  toast({
                    title:'Message received',
                    description:"I'll  get back to you as soon as possible",
                    position:"top-right",
                    variant:"left-accent",
                    status:"success",
                    isClosable:true,
                    duration:4000
                  })
                  actions.setSubmitting(false);
                  actions.resetForm();
                }, 1000);
              }}
            >
              {(props) => (
                <Form>
                  <VStack spacing={{ base: 2, md: 4 }}>
                    <Field name="name">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.name && form.touched.name}
                        >
                          <Input {...field} placeholder="Name" />
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="email">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email}
                        >
                          <Input {...field} placeholder="Email" />
                          <FormErrorMessage>
                            {form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="subject">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.subject && form.touched.subject
                          }
                        >
                          <Input {...field} placeholder="Subject" />
                          <FormErrorMessage>
                            {form.errors.subject}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="message">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.message && form.touched.message
                          }
                        >
                          <Textarea {...field} placeholder="Write a message" />
                          <FormErrorMessage>
                            {form.errors.message}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Button isLoading={props.isSubmitting} type="submit">
                      Send
                    </Button>
                  </VStack>
                </Form>
              )}
            </Formik>
          </Stack>
        </Flex>
        <Flex>
            
        </Flex>
      </Stack>
    </Flex>
  );
}

export default Contact;
