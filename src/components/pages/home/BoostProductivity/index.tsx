import {
  Center,
  Container,
  Image,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const BoostProductivitySection = () => {
  return (
    <Container maxW="6xl" py="16">
      <VStack as={Center}>
        <Heading marginBottom={-2} textAlign="center">
          Metode Membaca Lebih
        </Heading>
        <Heading textAlign="center">Santai dan Terarah</Heading>
        <Text marginBottom={10} textAlign="center">
          Meningkatkan produktivitas
        </Text>
      </VStack>
      <Center>
        <Image
          src="/images/boost.png"
          paddingTop={"6%"}
          maxH="600px"
          alt="Ilustrasi Belajar"
        />
      </Center>
    </Container>
  );
};

export default BoostProductivitySection;
