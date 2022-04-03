import React, { useState, useRef } from "react";
import {
  Flex,
  SimpleGrid,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  VStack,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { AnimatePresence, motion, layout } from "framer-motion";

const tech = [
  {
    technology: "Web Development",
    colour: "teal.500",
    percentage: 90,
    name: "HTML",
  },
  {
    technology: "Web Development",
    colour: "teal.500",
    percentage: 70,
    name: "CSS",
  },
  {
    technology: "Web Development",
    colour: "teal.500",
    percentage: 80,
    name: "NodeJS",
  },
  {
    technology: "Web Development",
    colour: "teal.500",
    percentage: 80,
    name: "React",
  },
  {
    technology: "Web Development",
    colour: "teal.500",
    percentage: 80,
    name: "API Design",
  },
  {
    technology: "Software Development",
    colour: "cyan.500",
    percentage: 80,
    name: "Javascript",
  },
  {
    technology: "Software Development",
    colour: "cyan.500",
    percentage: 70,
    name: "Python",
  },
  {
    technology: "Software Development",
    colour: "cyan.500",
    percentage: 50,
    name: "Java",
  },
  {
    technology: "Software Development",
    colour: "cyan.500",
    percentage: 50,
    name: "Golang",
  },
  {
    technology: "Software Development",
    colour: "cyan.500",
    percentage: 50,
    name: "Flutter",
  },
  {
    technology: "Software Development",
    colour: "cyan.500",
    percentage: 60,
    name: "react-native",
  },
  {
    technology: "Cloud",
    colour: "blue.500",
    percentage: 70,
    name: "AWS",
  },
  {
    technology: "Cloud",
    colour: "blue.500",
    percentage: 70,
    name: "Google Cloud",
  },
];

const MBox = motion(Box);
function Skills() {
  const [selected, setSelected] = useState(0);
  return (
    <VStack spacing={4} p={8} minH={"40vh"}>
      <Flex px={4} width={"100%"} align={"flex-start"}>
        <Heading>Skills</Heading>
      </Flex>
      <Tabs
        isLazy={true}
        variant="soft-rounded"
        w={{ md: "full" }}
        align={"center"}
        colorScheme={useColorModeValue("blackAlpha", "whiteAlpha")}
        isFitted
        lazyBehavior="unmount"
      >
        <TabList mb={2} >
          <Tab>All</Tab>
          <Tab>Web Development</Tab>
          <Tab>Software Development</Tab>
          <Tab>Cloud</Tab>
        </TabList>
        <TabPanels>
          <TabPanel as={AnimatePresence} exitBeforeEnter>
            <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }}>
              {tech.map((data, id) => (
                <SkillScore
                  key={id}
                  index={id}
                  percentage={data.percentage}
                  label={data.name}
                  colour={data.colour}
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel as={AnimatePresence} exitBeforeEnter>
            <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }}>
              {tech
                .filter((tech) => tech.technology === "Web Development")
                .map((data, id) => (
                  <SkillScore
                    key={id}
                    index={id}
                    percentage={data.percentage}
                    label={data.name}
                    colour={data.colour}
                  />
                ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel as={AnimatePresence} exitBeforeEnter>
            <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }}>
              {tech
                .filter((tech) => tech.technology === "Software Development")
                .map((data, id) => (
                  <SkillScore
                    key={id}
                    index={id}
                    percentage={data.percentage}
                    label={data.name}
                    colour={data.colour}
                  />
                ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel as={AnimatePresence} exitBeforeEnter>
            <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }}>
              {tech
                .filter((tech) => tech.technology === "Cloud")
                .map((data, id) => (
                  <SkillScore
                    key={id}
                    index={id}
                    percentage={data.percentage}
                    label={data.name}
                    colour={data.colour}
                  />
                ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
}

const SkillScore = ({ index, percentage, label, colour, ...rest }) => {
  return (
    <MBox
      alignContent={"center"}
      initial={{ opacity: 0, translateX: -50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.7, delay: (index + 1) * 0.2 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <CircularProgress
        value={percentage}
        size="100px"
        color={colour}
        {...rest}
      >
        <CircularProgressLabel>{percentage}%</CircularProgressLabel>
      </CircularProgress>
      <Text>{label}</Text>
    </MBox>
  );
};

export default Skills;
