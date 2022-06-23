import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Box,
  HStack,
  Icon,
  Center,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { FaEnvelope, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <Stack spacing={4}>
      <Text fontWeight="medium">Media sosial :</Text>
      <HStack>
        <Center p="2" bg="white" borderRadius="full">
          <Icon as={FaInstagram} />
        </Center>
        <Text>gigih</Text>
      </HStack>
      <HStack>
        <Center p="2" bg="red" borderRadius="full">
          <Icon as={FaYoutube} color="white" />
        </Center>
        <Text>gigih TV</Text>
      </HStack>
      <HStack>
        <Center p="2" bg="yellow.400" borderRadius="full">
          <Icon as={FaEnvelope} color="white" />
        </Center>
        <Text>mail@mail.com</Text>
      </HStack>
    </Stack>
  );
};

const GoalsCard = () => {
  return (
    <Box bg="white" p="5" borderRadius="2xl">
      <Heading size="md" mb="6">
        Tujuan Kami
      </Heading>
      <Text>Tujuan pembuatan produk :</Text>
      <UnorderedList>
        <ListItem>
          Meningkatkan minat baca 10% pengguna dari minimal 100 pengguna
          berdasarkan hasil survei singkat dengan pertanyaan ya/tidak
        </ListItem>
        <ListItem>
          Menampilkan berbagai artikel faktual dan menarik serta menambah
          pengetahuan pengguna.
        </ListItem>
        <ListItem>Meningkatkan frekuensi membaca pengguna.</ListItem>
        <ListItem>
          Meningkatkan ragam bacaan literasi digital yang dibaca pengguna.
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

const SuccessMetricCard = () => {
  return (
    <Box bg="white" p="5" borderRadius="2xl">
      <Heading size="md" mb="6">
        Ukuran Kesuksesan
      </Heading>
      <Text>Kriteria kesuksesan dari produk :</Text>
      <UnorderedList>
        <ListItem>
          Mampu mencapai target kami dalam meningkatkan minat baca 10% dari
          minimal 100 pengguna menggunakan metode yang ditentukan untuk mengukur
          keberhasilan
        </ListItem>
        <ListItem>
          Mampu membuat website literasi digital sesuai spesifikasi yang
          ditentukan
        </ListItem>
        <ListItem>Mampu memenuhi tujuan dan target output produk kami</ListItem>
      </UnorderedList>
    </Box>
  );
};

const AboutUs = () => {
  return (
    <Box minH="100vh" bg="#f6f8fd" py={16}>
      <Container maxW={"6xl"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={10} spacingY={16}>
          <Stack spacing={4}>
            <Text fontWeight="bold" fontSize="xl">
              Tentang Kami
            </Text>
            <Heading>A digital Product design agency</Heading>
            <Text>
              Dengan berkembangnya era digital yang sangat cepat sekarang ini,
              kami sangat memahami bahwa generasi sekarang banyak orang yang
              kurang minat dalam membaca maka dari itu untuk mengembangkan minat
              baca yang tinggi dibuatlah website dengan media digital untuk
              memberikan beberapa artikel yang bermanfaat dengan itu
              literasikekinian.com sebagai media digital akan memberikan solusi
              bagi orang yang tidak tertarik untuk membaca masalah yang
              ditemukan oleh generasi sekarang ini.
            </Text>
            <SocialMedia />
          </Stack>
          <Flex>
            <Image
              rounded={"2xl"}
              alt={"feature image"}
              src={
                "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=628&q=80"
              }
              objectFit={"cover"}
            />
          </Flex>
          <GoalsCard />
          <SuccessMetricCard />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AboutUs;
