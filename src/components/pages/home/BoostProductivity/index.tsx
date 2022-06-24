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
        <Heading marginBottom={-2}>Metode Membaca Lebih</Heading>
        <Heading>Santai dan Terarah</Heading>
        <Text marginBottom={10}>Boost Productivity</Text>
      </VStack>
      <Center>
        <Image boxSize={"65%"} src="/images/boost.png" paddingTop={"6%"} />
      </Center>
    </Container>
  );
};

export default BoostProductivitySection;
