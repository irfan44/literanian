import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Box,
} from "@chakra-ui/react";
import CreditsCard from "components/pages/aboutUs/CreditsCard";
import GoalsCard from "components/pages/aboutUs/GoalsCard";
import SocialMedia from "components/pages/aboutUs/SocialMedia";
import SuccessMetricCard from "components/pages/aboutUs/SuccessMetricCard";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    document.title = "Tentang Kami | Literanian";
  }, []);

  return (
    <Box minH="100vh" bg="#f6f8fd" py={16}>
      <Container maxW={"6xl"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={10} spacingY={16}>
          <Stack spacing={4}>
            <Text fontWeight="bold" fontSize="xl">
              Tentang Kami
            </Text>
            <Heading>
              Suatu produk digital untuk meningkatkan minat baca
            </Heading>
            <Text>
              Dengan berkembangnya era digital yang sangat cepat sekarang ini,
              kami sangat memahami bahwa generasi sekarang banyak orang yang
              kurang minat dalam membaca maka dari itu untuk mengembangkan minat
              baca yang tinggi dibuatlah website dengan media digital untuk
              memberikan beberapa artikel yang bermanfaat dengan itu Literanian
              sebagai media digital akan memberikan solusi bagi orang yang tidak
              tertarik untuk membaca masalah yang ditemukan oleh generasi
              sekarang ini.
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
          <CreditsCard />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AboutUs;
