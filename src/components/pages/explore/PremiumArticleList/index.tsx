import { Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
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
  const isNotLoggedIn = !uid;

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
      {isNotPremium && <Text>Akun kamu bukan akun premium</Text>}
      {isNotLoggedIn && <Text>Akun kamu belum login</Text>}
    </Container>
  );
};

export default PremiumArticleList;
