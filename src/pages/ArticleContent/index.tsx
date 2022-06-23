import { Badge, Box, Container, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { fetchArticleBySlug } from "api/graphcms";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { ArticleContent } from "types/article";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import formatDate from "utils/formatDate";

const ContentArticle = () => {
  const [article, setArticle] = useState<ArticleContent>();
  const { slug } = useParams();

  const getArticleContent = async () => {
    if (slug) {
      try {
        const article = await fetchArticleBySlug(slug);
        setArticle(article);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const date = article && formatDate(article.createdAt);

  useEffect(() => {
    getArticleContent();
  }, []);

  return (
    <Box minH="100vh" bg="#f6f8fd" py="16">
      <Container maxW="4xl">
        {article && (
          <>
            <Heading mb="4">{article.title}</Heading>
            <HStack mb="6">
              <Badge bg="#D6E6F5">{article.category}</Badge>
              <Text fontSize="sm">|</Text>
              <Text fontSize="sm">{date}</Text>
            </HStack>
            <Image src={article.coverImage.url} borderRadius="2xl" />
            <Prose>
              <RichText content={article.content.raw} />
            </Prose>
          </>
        )}
      </Container>
    </Box>
  );
};

export default ContentArticle;
