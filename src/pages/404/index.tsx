import {
  Box,
  Button,
  Center,
  Container,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Halaman Tidak Ditemukan | Literanian";
  }, []);

  return (
    <Box minH="100vh" bg="#f6f8fd">
      <Container maxW="6xl" pt="16">
        <VStack as={Center}>
          <Image
            src="/images/404.svg"
            alt="404 image"
            w="full"
            h={["240px", "400px"]}
            mb="6"
          />
          <Text mb="6">Halaman tidak ditemukan</Text>
          <Button bgColor={"#2447F9"} onClick={() => navigate("/")}>
            Kembali ke Beranda
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Page404;
