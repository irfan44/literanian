import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

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
  withDefaultColorScheme({ colorScheme: "blue" }),
  withProse()
);

export default theme;
