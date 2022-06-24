import {
  Box,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import CategoryCard from "components/CategoryCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "redux/hooks";

const Category = () => {
  const { uid } = useAppSelector((state) => state.userProfile);
  const navigate = useNavigate();

  const categoryList = [
    {
      id: 1,
      title: "Pendidikan",
      slug: "pendidikan",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
      subtitle: "Membaca artikel tentang Pendidikan",
    },
    {
      id: 2,
      title: "Teknologi",
      slug: "teknologi",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      subtitle: "Membaca artikel tentang Teknologi",
    },
    {
      id: 3,
      title: "Kesehatan",
      slug: "kesehatan",
      image:
        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      subtitle: "Membaca artikel tentang Kesehatan",
    },
    {
      id: 4,
      title: "Sastra",
      slug: "sastra",
      image:
        "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      subtitle: "Membaca artikel tentang Sastra",
    },
    {
      id: 5,
      title: "Pariwisata",
      slug: "pariwisata",
      image:
        "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      subtitle: "Membaca artikel tentang Pariwisata",
    },
  ];

  useEffect(() => {
    if (!uid) {
      navigate("/login");
    }
  }, []);

  return (
    <Box minH="100vh" bg="#f6f8fd" pb="16">
      <Container maxW="6xl">
        <VStack as={Center} py="16">
          <Heading>Kategori Artikel</Heading>
          <Text>Berbagai kategori artikel yang tersedia</Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
          {categoryList.map((category) => {
            return <CategoryCard key={category.id} {...category} />;
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Category;
