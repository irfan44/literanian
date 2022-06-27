import {
  Button,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import CategoryCard from "components/CategoryCard";
import categoryList from "data/categoryList";
import { Link as RouterLink } from "react-router-dom";

const CategorySection = () => {
  const categories = categoryList.slice(2);

  return (
    <Container maxW="6xl" py="16">
      <VStack as={Center} textAlign="center">
        <Heading>Kategori</Heading>
        <Text>Kategori artikel yang dapat kamu pilih</Text>
      </VStack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6" mt={6}>
        {categories.map((category) => {
          return <CategoryCard key={category.id} {...category} />;
        })}
      </SimpleGrid>
      <Center mt="10">
        <Button as={RouterLink} to="/category" bgColor={"#2447F9"}>
          Lihat semua
        </Button>
      </Center>
    </Container>
  );
};

export default CategorySection;
