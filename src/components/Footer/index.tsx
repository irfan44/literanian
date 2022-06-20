import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Navlink from "components/Navbar/Navlink";

const Footer = () => {
  return (
    <Box bg="black" color="white">
      <Container maxW="6xl" py="16">
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr" }}
          spacing={8}
        >
          <Box>
            <Heading mb="10">Logo</Heading>
            <Text>Copyright © 2022 (nama brand). All right reserved</Text>
            <Text>Dibuat oleh tim FE-ED6</Text>
          </Box>
          <Stack align={"flex-start"}>
            <Navlink />
          </Stack>
        </SimpleGrid>
        <VStack></VStack>
      </Container>
    </Box>
  );
};

export default Footer;
