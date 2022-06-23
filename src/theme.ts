import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const Button = {
  baseStyle: {
    borderRadius: "2xl",
  },
  sizes: {
    md: {
      px: "6",
      py: "1",
    },
  },
};

const Link = {
  baseStyle: {
    _focus: {
      boxShadow: "none",
    },
  },
};

const theme = extendTheme(
  {
    fonts: {
      body: `Poppins, system-ui, sans-serif`,
      heading: `Poppins, system-ui, sans-serif`,
    },
    components: {
      Button,
      Link,
    },
  },
  withDefaultColorScheme({ colorScheme: "blue" })
);

export default theme;
