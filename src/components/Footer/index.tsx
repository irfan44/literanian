import { Center, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container maxW="6xl" py="8">
      <VStack as={Center}>
        <Heading>Logo</Heading>
        <Text>Dibuat dengan ❤️ oleh tim FE-ED6</Text>
        <Text>Copyright © 2022 (nama brand). All right reserved</Text>
      </VStack>
    </Container>
  );
};

export default Footer;
