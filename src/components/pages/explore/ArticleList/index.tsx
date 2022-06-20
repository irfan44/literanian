import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import ArticleCard from "components/ArticleCard";
import { ArticleData } from "types/article";

interface Props {
  title: string;
  articleData: ArticleData[];
}

const ArticleLists = (props: Props) => {
  const { articleData } = props;
  return (
    <Container maxW="6xl" py="8">
      <Heading mb="6">{props.title}</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="6">
        {articleData.map((article) => (
          <ArticleCard key={article.slug} {...article} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ArticleLists;
