import React from "react";
import {
  Flex,
  Heading,
  Stack,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { FaReact,FaNodeJs,FaGitAlt } from "react-icons/fa";
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
          <ListItem>
            <ListIcon as={FaReact} /> React{" "}
          </ListItem>
          <ListItem>
            <ListIcon as={FaNodeJs} /> React{" "}
          </ListItem>
          <ListItem>
            <ListIcon as={FaGitAlt} /> React{" "}
          </ListItem>
          <ListItem>
            <ListIcon as={SiTypescript} /> React{" "}
          </ListItem>
          <ListItem>
            <ListIcon as={FaReact} /> React{" "}
          </ListItem>
        </List>
      </Flex>
    </Stack>
  );
};

export default Skills;
