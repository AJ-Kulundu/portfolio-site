import React from "react";
import {
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCloud,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import { SiTypescript, SiJavascript } from "react-icons/si";
const Skills = () => {
  return (
    <VStack spacing={5} p={8}>
      <Flex justify={"flex-start"} px={{lg:10}} w="full">
        <Heading>Skills</Heading>
      </Flex>
      <Flex justify={"flex-start"} px={{lg:10}} w="full">
        <Text>
          Through my studies, I have gained a lot of experience and
          understanding of computer science concepts and web development
          concepts, which I use to provide solutions to real world problems. I
          have gained the following skills:
        </Text>
      </Flex>
      <Flex  justify={"flex-start"} px={{lg:10}} w="full">
        <List>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} py={4} spacingX={{base:4, md:16, lg:24}} spacingY={{base:4,md:6,lg:8}} >
            <ListItem>
              <ListIcon as={FaReact} /> React{" "}
            </ListItem>
            <ListItem>
              <ListIcon as={FaNodeJs} /> NodeJS{" "}
            </ListItem>
            <ListItem>
              <ListIcon as={FaGitAlt} /> Git{" "}
            </ListItem>
            <ListItem>
              <ListIcon as={SiTypescript} /> TypeScript{" "}
            </ListItem>
            <ListItem>
              <ListIcon as={FaPython} /> Python{" "}
            </ListItem>
            <ListItem>
              <ListIcon as={SiJavascript} /> JavaScript{" "}
            </ListItem>
            <ListItem>
              <ListIcon as={FaCloud} /> DevOps{" "}
            </ListItem>
            <ListItem>
              <ListIcon as={FaDatabase} /> SQL{" "}
            </ListItem>
          </SimpleGrid>
        </List>
      </Flex>
    </VStack>
  );
};

export default Skills;
