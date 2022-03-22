import React from "react";
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
  useColorModeValue
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaTimes, FaStream } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionText = motion(Text);

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const value = useColorModeValue("white","gray.800");
  return (
    <Flex p={4} px={4} zIndex={9} position="sticky" top={0} width={"100%"} bg={value} align={"center"}boxShadow={"sm"}>
      <Box px={{base:0,md:6,lg:8}}>
        <Heading fontSize={{base:"md",md:"lg"}}>AJ Kulundu</Heading>
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
          <Box p={6} bg={value}>
            <VStack spacing="25px" pb={20}>
              <NavItem>Home</NavItem>
              <NavItem>About</NavItem>
              <NavItem>Projects</NavItem>
              <NavItem>Skills</NavItem>
              <NavItem>Contact</NavItem>
            </VStack>
          </Box>
        </Slide>
      </Box>
      <Box
        display={{ base: "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex width={"50%"} align="center" justify={{ base: "center", md: "space-between" }}>
          <HStack spacing="30px">
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>Skills</NavItem>
            <NavItem>Contact</NavItem>
            <Toggle />
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
};


const NavItem = ({children}) => {

  return(
    <MotionText
    whileHover = {{scale:1.2}}
    whileTap = {{scale:0.8}}>
      <Link>{children}</Link>
    </MotionText>
  )
}
const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
    borderRadius={'full'}
      variant="ghost"
      aria-label="Dark/Light mode toggle"
      icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
      onClick={() => toggleColorMode()}
    />
  );
};

export default Navbar;
