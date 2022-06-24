import {
  Box,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { fetchArticlesByCategory } from "api/graphcms";
import ArticleCard from "components/ArticleCard";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "redux/hooks";
import { ArticleData } from "types/article";

const CategoryArticles = () => {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const { uid } = useAppSelector((state) => state.userProfile);
  const { slug } = useParams();
  const navigate = useNavigate();

  const getArticles = async () => {
    if (slug) {
      try {
        const articles = await fetchArticlesByCategory(slug);
        setArticles(articles);
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    getArticles();
    if (!uid) {
      navigate("/login");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box minH="100vh" bg="#f6f8fd" pb="16">
      <Container maxW="6xl">
        <VStack as={Center} py="16">
          <Text fontSize="sm" color="blackAlpha.700">
            Kategori
          </Text>
          <Heading textTransform="capitalize">{slug}</Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
          {articles.map((article) => {
            return <ArticleCard key={article.slug} {...article} />;
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CategoryArticles;
