import {
  Box,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import ArticleCard from "components/ArticleCard";
import { useAppSelector } from "redux/hooks";
import { ArticleData } from "types/article";

interface Props {
  title: string;
  articleData: ArticleData[];
}

const PremiumArticleList = (props: Props) => {
  const { articleData } = props;
  const { uid } = useAppSelector((state) => state.userProfile);
  const { premium } = useAppSelector((state) => state.userStatus);

  const isPremium = uid && premium;
  const isNotPremium = uid && !premium;

  return (
    <Container maxW="6xl" py="8">
      <Heading mb="6">{props.title}</Heading>
      {isPremium && (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
          {articleData.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </SimpleGrid>
      )}
      {isNotPremium && (
        <Box as={Center} py="6" bg="#D6E6F5" borderRadius="2xl">
          <Text>
            Dapatkan lebih banyak poin untuk buka akses ke artikel premium
          </Text>
        </Box>
      )}
    </Container>
  );
};

export default PremiumArticleList;
