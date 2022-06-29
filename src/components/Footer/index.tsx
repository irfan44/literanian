import { Box, Container, Image, SimpleGrid, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="#f6f8fd">
      <Container maxW="6xl" py="16">
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr" }}
          spacing={8}
        >
          <Box>
            <Image src="/images/logo.svg" w="142px" mb="6" />
            <Text mb="16">
              Explorasi berbagai artikel menarik dan kembangkan pengetahuanmu.
              Kumpulkan poin untuk mendapatkan akses ke artikel premium
            </Text>
            <Text>© 2022 Literanian</Text>
            <Text>Dibuat dengan ❤️ oleh tim FE-ED6</Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
