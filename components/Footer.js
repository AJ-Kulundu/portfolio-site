import React from "react";
import { IconButton, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaMediumM } from "react-icons/fa";
import { motion } from "framer-motion";

const MButton = motion(IconButton);

function Footer() {
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      p={4}
      py={4}
      px={10}
      spacing={4}
      justify={{ base: "center", md: "space-between" }}
      align={{ base: "center", md: "center" }}
      boxShadow="sm"
    >
      <Text><strong>© 2022</strong></Text>
      <Stack direction={"row"} spacing={4}>
        <SocialButton label={"Github link"} href={"#"} icon={<FaGithub />} />
        <SocialButton label={"LinkedIn link"} href={"#"} icon={<FaLinkedinIn />} />
        <SocialButton label={"Twitter Link"} href={"#"} icon={<FaTwitter />} />
        <SocialButton label={"Medium Link"} href={"#"} icon={<FaMediumM />} />
      </Stack>
    </Stack>
  );
}

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

export default Footer;
