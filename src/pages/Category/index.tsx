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
      image: "https://picsum.photos/id/1/200/300",
      subtitle: "Membaca artikel tentang pendidikan",
    },
    {
      id: 2,
      title: "Teknologi",
      slug: "teknologi",
      image: "https://picsum.photos/id/1/200/300",
      subtitle: "Membaca artikel tentang teknologi",
    },
    {
      id: 3,
      title: "Kesehatan",
      slug: "kesehatan",
      image: "https://picsum.photos/id/1/200/300",
      subtitle: "Membaca artikel tentang Kesehatan",
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
