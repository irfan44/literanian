import {
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { fetchLatestArticles } from "api/graphcms";
import ArticleCard from "components/ArticleCard";
import { useEffect, useState } from "react";
import { ArticleData } from "types/article";

const RecommendedArticleSection = () => {
  const [articleData, setArticleData] = useState<ArticleData[]>([]);

  const getArticle = async () => {
    const article = await fetchLatestArticles();
    setArticleData(article);
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <Container maxW="6xl" py="16">
      <VStack as={Center}>
        <Heading>Artikel Rekomendasi</Heading>
        <Text>Beberapa artikel populer yang kami rekomendasikan</Text>
      </VStack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8" mt={6}>
        {articleData.map((article) => {
          return (

            <ArticleCard key={article.slug} {...article} />

          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default RecommendedArticleSection;
