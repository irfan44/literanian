import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stat,
  StatHelpText,
  StatNumber,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import LoginModal from "components/LoginModal";

const HeroSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      as={Container}
      direction={{ base: "column", md: "column", lg: "row" }}
      alignItems="center"
      maxW="6xl"
      py="16"
    >
      <Box
        w={{ base: "100%", md: "100%", lg: "50%" }}
        pr={{ base: "0", md: "0", lg: "6" }}
        pb={{ base: "16", md: "16", lg: "0" }}
      >
        <Heading as="h1" size="2xl" mb="6">
          Explorasi berbagai artikel menarik di (nama brand)
        </Heading>
        <Text fontSize="md" mb="6">
          Baca artikel dan kerjakan kuis untuk kumpulkan poin. Penuhi target dan
          dapatkan akses untuk artikel premium
        </Text>
        <Button size="lg" onClick={onOpen}>
          Eksplorasi sekarang!
        </Button>
        <Flex mt="12">
          <Stat>
            <StatNumber>100+</StatNumber>
            <StatHelpText>Pengguna</StatHelpText>
          </Stat>
          <Stat>
            <StatNumber>10</StatNumber>
            <StatHelpText>Artikel</StatHelpText>
          </Stat>
          <Stat>
            <StatNumber>5</StatNumber>
            <StatHelpText>Kontributor</StatHelpText>
          </Stat>
        </Flex>
      </Box>
      <Box w={{ base: "100%", md: "100%", lg: "50%" }}>
        <Image src="/images/hero.png" borderRadius="xl" />
      </Box>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default HeroSection;
