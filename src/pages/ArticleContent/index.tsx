import { Box, Container, Heading } from "@chakra-ui/react";
import { fetchArticleBySlug } from "api/graphcms";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { ArticleContent } from "types/article";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

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

  useEffect(() => {
    getArticleContent();
  }, []);

  return (
    <Box minH="100vh" bg="#f6f8fd" py="16">
      <Container maxW="4xl">
        {article && (
          <>
            <Heading mb="4">{article.title}</Heading>
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
