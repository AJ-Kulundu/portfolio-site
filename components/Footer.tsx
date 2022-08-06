import React from "react";
import { Stack, Text } from "@chakra-ui/react";

const Footer = () => {
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
      <Text>© 2022</Text>
      <Text><strong>Designed + Coded by AJ Kulundu</strong></Text>
      <Text>Made in Nairobi,KE</Text>
    </Stack>
  );
}



export default Footer;
