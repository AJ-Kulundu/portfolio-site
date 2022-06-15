import React from "react";
import { Stack, Flex, Heading, Text, Button, HStack } from "@chakra-ui/react";
import Typical from "react-typical";
import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";
import { saveAs } from "file-saver";

const MotionButton = motion(Button);
const MStack = motion(Stack);

function Home() {
  const saveFile = () => {
    saveAs("/AJ Kulundu resume.pdf", "AJ-reusme.pdf");
  };
  return (
    <MStack
      minH={"70vh"}
      direction={{ base: "column", md: "row" }}
      id="home"
    >
      <Flex p={8} flex={1} justify={"center"} align={"center"}>
        <Stack spacing={4} w={"full"} maxW={"lg"}>
          <Text fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}>
            Hello👋, I&apos;m
          </Text>
          <Heading
            fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
            bgClip="text"
            bgGradient="linear(to-r, #7928CA, #FF0080)"
          >
            AJ Kulundu
          </Heading>
          <Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
            <Typical
              loop={Infinity}
              steps={[
                "Software Engineer",
                3000,
                "Full Stack Web Developer",
                3000,
                "Cloud Practitioner",
                3000,
              ]}
            />
          </Heading>
          <Text>
            I&apos;m a Software developer based in Nairobi, Kenya.
            <br />
            📚 Currently Learning Golang.
          </Text>
          <HStack spacing={"15px"}>
            <CustomButton>Contact</CustomButton>
            <CustomButton leftIcon={<FaFileDownload />} onClick={saveFile}>
              Resume
            </CustomButton>
          </HStack>
        </Stack>
      </Flex>
      <Flex flex={1} align={"center"} display={{ base: "none", md: "block" }}>
        <Heading>AJ Kulundu</Heading>
      </Flex>
    </MStack>
  );
}

const CustomButton = ({ children, ...rest }) => {
  return (
    <MotionButton
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      rounded={"full"}
      {...rest}
    >
      {children}
    </MotionButton>
  );
};

export default Home;
