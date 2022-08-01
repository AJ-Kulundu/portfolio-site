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
import * as emailjs from "emailjs-com";

const MButton = motion(IconButton);

const ContactSchema = Yup.object().shape({
  from_name: Yup.string().required("Your name is required"),
  reply_to: Yup.string()
    .email("Invalid email")
    .required("Your email is required"),
  subject: Yup.string().required("A subject is required"),
  message: Yup.string().required("A message is required"),
});

function Contact({ userID, serviceID, templateID, userEmail }) {
  const toast = useToast();
  return (
    <Stack minH={"60vh"} direction={{ base: "column", md: "row" }} id="contact">
      <Flex p={8} flex={1} justify={"center"} align={"center"}>
        <Stack spacing={4} w={"full"} maxW={"lg"}>
          <Heading>Let&apos;s Build Togther</Heading>
          <Text>
            {" "}
            You can reach out to me if you are looking for a developer, have
            questions or if you want to connect.{" "}
          </Text>
          <Formik
            initialValues={{
              from_name: "",
              to_name: userEmail,
              reply_to: "",
              subject: "",
              message: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={(values, actions) => {
              emailjs
                .send(serviceID, templateID, values, userID)
                .then((res) => {
                  console.log("SUCCESS!", res.status, res.text);

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
                })
                .catch((error) => {
                  console.log("FAILED...", error);

                  toast({
                    title: "Message was not received",
                    description: "An error has occured",
                    position: "top-right",
                    variant: "left-accent",
                    status: "error",
                    isClosable: true,
                    duration: 4000,
                  });

                  actions.setSubmitting(false);
                  actions.resetForm();
                });
            }}
          >
            {(props) => (
              <Form>
                <VStack spacing={{ base: 2, md: 4 }}>
                  <Field name="from_name">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.from_name && form.touched.from_name
                        }
                      >
                        <Input {...field} placeholder="Name" />
                        <FormErrorMessage>
                          {form.errors.from_name}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="reply_to">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.reply_to && form.touched.reply_to
                        }
                      >
                        <Input {...field} placeholder="Email" />
                        <FormErrorMessage>
                          {form.errors.reply_to}
                        </FormErrorMessage>
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
                  <Button
                    isLoading={props.isSubmitting}
                    loadingText="Sending"
                    type="submit"
                    size="lg"
                  >
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
                href={"https://github.com/AJ-Kulundu"}
                icon={<FaGithub />}
              />
              <SocialButton
                label={"LinkedIn link"}
                href={"https://www.linkedin.com/in/james-kulundu-480034234/"}
                icon={<FaLinkedinIn />}
              />
              <SocialButton
                label={"Twitter Link"}
                href={"https://twitter.com/AJKulundu"}
                icon={<FaTwitter />}
              />
              <SocialButton
                label={"Medium Link"}
                href={"https://medium.com/@AJkulundu"}
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
