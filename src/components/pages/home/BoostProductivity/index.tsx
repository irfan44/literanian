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
          src="/images/boost.webp"
          paddingTop={"6%"}
          w={["100%", "770px"]}
          h={["380px", "580px"]}
          alt="Ilustrasi Belajar"
          objectFit="cover"
        />
      </Center>
    </Container>
  );
};

export default BoostProductivitySection;
