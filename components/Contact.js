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
  IconButton,
  HStack,
  Center,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import {
  FaPhoneAlt,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaMediumM,
} from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { motion } from "framer-motion";

const MButton = motion(IconButton);

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Your name is required"),
  email: Yup.string().email("Invalid email").required("Your email is required"),
  subject: Yup.string().required("A subject is required"),
  message: Yup.string().required("A message is required"),
});
function Contact() {
  const toast = useToast();
  return (
    <Stack minH={"60vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} justify={"center"} align={"center"}>
        <Stack spacing={4} w={"full"} maxW={"lg"}>
          <Heading>Contact me</Heading>
          <Text>
            {" "}
            I am interested in working on projects, especially large and
            ambitious projects. You can also contact me for other questions and
            requests using the form below.{" "}
          </Text>
          <Formik
            initialValues={{ name: "", email: "", subject: "", message: "" }}
            validationSchema={ContactSchema}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                toast({
                  title: "Message received",
                  description: "I'll  get back to you as soon as possible",
                  position: "top-right",
                  variant: "left-accent",
                  status: "success",
                  isClosable: true,
                  duration: 4000,
                });
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
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <Input {...field} placeholder="Email" />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="subject">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.subject && form.touched.subject}
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
                        isInvalid={form.errors.message && form.touched.message}
                      >
                        <Textarea {...field} placeholder="Write a message" />
                        <FormErrorMessage>
                          {form.errors.message}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button isLoading={props.isSubmitting} type="submit" size='lg'>
                    Send
                  </Button>
                </VStack>
              </Form>
            )}
          </Formik>
        </Stack>
      </Flex>
      <Flex p={8} flex={1} justify={"center"} align={"center"}>
        <Center>
          <VStack>
            <Heading>Contact Info</Heading>
            <HStack>
              <FaPhoneAlt />
              <Text>+254 724 582361</Text>
            </HStack>
            <HStack>
              <BiMailSend />
              <Text>jameskulundu@gmail.com</Text>
            </HStack>
            <Heading>Follow me</Heading>
            <Stack direction={"row"} spacing={4}>
              <SocialButton
                label={"Github link"}
                href={"#"}
                icon={<FaGithub />}
              />
              <SocialButton
                label={"LinkedIn link"}
                href={"#"}
                icon={<FaLinkedinIn />}
              />
              <SocialButton
                label={"Twitter Link"}
                href={"#"}
                icon={<FaTwitter />}
              />
              <SocialButton
                label={"Medium Link"}
                href={"#"}
                icon={<FaMediumM />}
              />
            </Stack>
          </VStack>
        </Center>
      </Flex>
    </Stack>
  );
}

const SocialButton = ({ icon, href, label }) => {
  return (
    <MButton
      aria-label={label}
      icon={icon}
      href={href}
      as={"a"}
      borderRadius={"full"}
      variant={"ghost"}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    />
  );
};

export default Contact;
