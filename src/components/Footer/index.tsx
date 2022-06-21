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
    <Box bg="#f6f8fd">
      <Container maxW="6xl" py="16">
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr" }}
          spacing={8}
        >
          <Box>
            <Heading>Logo</Heading>
            <Text mb="16">
              Explorasi berbagai artikel menarik dan kembangkan pengetahuanmu.
              Kumpulkan poin untuk mendapatkan akses ke artikel premium
            </Text>
            <Text>© 2022 (nama brand). All right reserved</Text>
            <Text>Dibuat dengan ❤️ oleh tim FE-ED6</Text>
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
