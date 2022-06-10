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
};

const theme = extendTheme({
  fonts: {
    body: `'InterVariable', system-ui, sans-serif`,
    heading: `'Source Sans Pro', system-ui, sans-serif`,
  },
  components: {
    Button,
  },
});

export default theme;
