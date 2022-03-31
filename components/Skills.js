import React,{useEffect,useRef} from "react";
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
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const tech = [
  {
    technology: "Web Development",
    category: "",
    percentage: 90,
    name: "HTML",
  },
  {
    technology: "Web Development",
    category: "",
    percentage: 70,
    name: "CSS",
  },
  {
    technology: "Web Development",
    category: "",
    percentage: 80,
    name: "NodeJS",
  },
  {
    technology: "Web Development",
    category: "",
    percentage: 80,
    name: "React",
  },
  {
    technology: "Web Development",
    category: "",
    percentage: 80,
    name: "API Design",
  },
  {
    technology: "Software Development",
    category: "",
    percentage: 80,
    name: "Javascript",
  },
  {
    technology: "Software Development",
    category: "",
    percentage: 70,
    name: "Python",
  },
  {
    technology: "Software Development",
    category: "",
    percentage: 50,
    name: "Java",
  },
  {
    technology: "Software Development",
    category: "",
    percentage: 50,
    name: "Golang",
  },
  {
    technology: "Software Development",
    category: "",
    percentage: 50,
    name: "Flutter",
  },
  {
    technology: "Software Development",
    category: "",
    percentage: 60,
    name: "react-native",
  },
  {
    technology: "Cloud",
    category: "",
    percentage: 70,
    name: "AWS",
  },
  {
    technology: "Cloud",
    category: "",
    percentage: 70,
    name: "Google Cloud",
  },
];

const MBox = motion(Box);
function Skills() {
  return (
    <VStack spacing={4} p={8} minH={"35vh"}>
      <Flex width={"100%"} align={"flex-start"}>
        <Heading>Skills</Heading>
      </Flex>
      <Tabs
        isLazy={true}
        variant="soft-rounded"
        w={{ md: "full" }}
        align={"center"}
        isFitted
      >
        <TabList mb={2}>
          <Tab>All</Tab>
          <Tab>Web Development</Tab>
          <Tab>Software Development</Tab>
          <Tab>Cloud</Tab>
        </TabList>
        <TabPanels>
          <TabPanel as={AnimatePresence}>
            <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }}>
              {tech.map((data, id) => (
                <SkillScore
                  key={id}
                  index={id}
                  percentage={data.percentage}
                  label={data.name}
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel as={AnimatePresence}>
            <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }}>
              {tech
                .filter((tech) => tech.technology === "Web Development")
                .map((data, id) => (
                  <SkillScore
                    key={id}
                    index={id}
                    percentage={data.percentage}
                    label={data.name}
                  />
                ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel as={AnimatePresence}>
            <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }}>
              {tech
                .filter((tech) => tech.technology === "Software Development")
                .map((data, id) => (
                  <SkillScore
                    key={id}
                    index={id}
                    percentage={data.percentage}
                    label={data.name}
                  />
                ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel as={AnimatePresence} >
            <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }}>
              {tech
                .filter((tech) => tech.technology === "Cloud")
                .map((data, id) => (
                  <SkillScore
                    key={id}
                    index={id}
                    percentage={data.percentage}
                    label={data.name}
                  />
                ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
}

const SkillScore = ({ index, percentage, label, ...rest }) => {
    
  return (
    <AnimatePresence>
      <MBox
        alignContent={"center"}
        initial={{ opacity: 0, translateX: -50 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5, delay: index * 0.3 }}
        exit={{ opacity: 0, translateX: 50, transition:{delay:index*0.2} }}
      >
        <CircularProgress value={percentage} size="100px" {...rest}>
          <CircularProgressLabel>{percentage}%</CircularProgressLabel>
        </CircularProgress>
        <Text>{label}</Text>
      </MBox>
    </AnimatePresence>
  );
};

export default Skills;
