import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";

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
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
