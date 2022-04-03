import React from "react";
import { Stack, Flex, Heading, Text, Button, HStack } from "@chakra-ui/react";
import Typical from "react-typical";
import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";

const MotionButton = motion(Button);

function Home() {
  return (
    <Stack minH={"70vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} justify={"center"} align={"center"}>
        <Stack spacing={4} w={"full"} maxW={"lg"}>
          <Text fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}>
            Hello👋, I&apos;m
          </Text>
          {/* useColormodeValue("black","white"),useColormodeValue("gray.800,"gray.300") */}
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
                "Software Developer",
                3000,
                "UI/UX Designer",
                3000,
                "Full Stack Web Developer",
                3000,
                "Mobile App Developer",
                3000,
                "Cloud Practitioner",
                3000,
              ]}
            />
          </Heading>
          <Text>
            I&apos;m a Software developer based in Nairobi, working on
            NodeJS and React Projects.
            <br />
            📚 Currently Learning Flutter.
          </Text>
          <HStack spacing={"15px"}>
            <CustomButton>Contact</CustomButton>
            <CustomButton leftIcon={<FaFileDownload />}>Resume</CustomButton>
          </HStack>
        </Stack>
      </Flex>
      <Flex flex={1} align={"center"} display={{base:"none",md:"block"}}>
        <Heading>AJ Kulundu</Heading>
      </Flex>
    </Stack>
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
