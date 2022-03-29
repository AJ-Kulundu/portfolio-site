import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Work Sans",
    body: "Work Sans",
  },
  Link: {
variants: { _hover: { textDecoration: "none" } },
  },
});

export default theme;
