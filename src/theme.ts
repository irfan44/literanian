import { extendTheme } from "@chakra-ui/react";

const Button = {
  baseStyle: {
    borderRadius: "full",
  },
  sizes: {
    md: {
      px: "6",
      py: "1",
    },
  },
  variants: {
    solid: {
      bg: "black",
      color: "white",
      _hover: {
        bg: "blackAlpha.800",
      },
    },
  },
};

const theme = extendTheme({
  fonts: {
    body: `'InterVariable', system-ui, sans-serif`,
    heading: `'Source Sans Pro', system-ui, sans-serif`,
  },
  components: {
    Button,
  },
  styles: {
    global: {
      body: {
        color: "black",
      },
    },
  },
});

export default theme;
