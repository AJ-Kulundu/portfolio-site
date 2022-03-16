import React, { useState } from "react";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  Text,
  useColorMode,
  IconButton,
  Link,
  HStack,
  useDisclosure,
  Slide,
  VStack,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaTimes, FaStream } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionText = motion(Text);

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex p={4}>
      <Box>
        <Heading>AJ-KULUNDU</Heading>
      </Box>
      <Spacer />
      <Box display={{ base: "block", md: "none" }}>
        <HStack>
          <Toggle />
          <IconButton
            onClick={onToggle}
            icon={isOpen === true ? <FaTimes /> : <FaStream />}
            aria-label="Menu Button"
          />
        </HStack>
        <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
          <Box p={6}>
            <VStack Spacing="30px">
              <MotionText>Home</MotionText>
              <MotionText>About</MotionText>
              <MotionText>Projects</MotionText>
              <MotionText>Skills</MotionText>
              <MotionText>Contact</MotionText>
            </VStack>
          </Box>
        </Slide>
      </Box>
      <Box
        display={{ base: "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex align="center" justify={{ base: "center", md: "space-between" }}>
          <HStack Spacing="30px">
            <MotionText>Home</MotionText>
            <MotionText>About</MotionText>
            <MotionText>Projects</MotionText>
            <MotionText>Skills</MotionText>
            <MotionText>Contact</MotionText>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
};



const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      variant="ghost"
      aria-label="Dark/Light mode toggle"
      icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
      onClick={() => toggleColorMode()}
    />
  );
};

export default Navbar;
