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
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaTimes,
  FaStream,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaMediumM,
} from "react-icons/fa";
import { motion } from "framer-motion";

const MotionText = motion(Text);
const MButton = motion(IconButton);

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const value = useColorModeValue("white", "gray.800");
  return (
    <Flex
      p={4}
      px={4}
      zIndex={9}
      position="sticky"
      top={0}
      width={"100%"}
      bg={value}
      align={"center"}
      boxShadow={"sm"}
    >
      <Box px={{ base: 0, md: 6, lg: 8 }}>
        <Heading fontSize={{ base: "md", md: "lg" }}>AJ Kulundu</Heading>
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
          <Box p={4} bg={value}>
            <VStack spacing="25px" pb={10}>
              <NavItem>Home</NavItem>
              <NavItem>About</NavItem>
              <NavItem>Projects</NavItem>
              <NavItem>Skills</NavItem>
              <NavItem>Contact</NavItem>
              <Stack direction={"row"} spacing={4}>
                <MButton label={"Github link"} href={"#"} icon={<FaGithub />} />
                <MButton
                  label={"LinkedIn link"}
                  href={"#"}
                  icon={<FaLinkedinIn />}
                />
                <MButton
                  label={"Twitter Link"}
                  href={"#"}
                  icon={<FaTwitter />}
                />
                <MButton
                  label={"Medium Link"}
                  href={"#"}
                  icon={<FaMediumM />}
                />
              </Stack>
            </VStack>
          </Box>
        </Slide>
      </Box>
      <Box
        display={{ base: "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          width={"50%"}
          align="center"
          justify={{ base: "center", md: "space-between" }}
        >
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

const NavItem = ({ children }) => {
  return (
    <MotionText whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <Link>{children}</Link>
    </MotionText>
  );
};
const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      borderRadius={"full"}
      variant="ghost"
      aria-label="Dark/Light mode toggle"
      icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
      onClick={() => toggleColorMode()}
    />
  );
};

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

export default Navbar;
