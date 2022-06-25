import React from "react";
import {
  Flex,
  Heading,
  Stack,
  Text,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaReact,FaNodeJs,FaGitAlt,FaCloud,FaPython,FaDatabase } from "react-icons/fa";
import { SiTypescript,SiJavascript } from 'react-icons/si';
const Skills = () => {
  return (
    <Stack>
      <Flex direction={"column"} p={8} px={16}>
        <Heading>Skills</Heading>
        <Text>
          Through my studies, I have gained a lot of expirience and
          understanding of computer science concepts and web development
          concepts, which I use to provide solutions to real world problems.
        </Text>
        <List>
          <SimpleGrid columns={{base:1,md:2,lg:4}} spacingY={4}>
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
            <ListIcon as={FaDatabase} /> SQL & NoSQL{" "}
          </ListItem>
          </SimpleGrid>
        </List>
      </Flex>
    </Stack>
  );
};

export default Skills;
