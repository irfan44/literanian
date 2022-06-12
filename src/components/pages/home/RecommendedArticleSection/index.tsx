import {
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const RecommendedArticleSection = () => {
  return (
    <Container maxW="6xl" py="16">
      <VStack as={Center}>
        <Heading>Artikel Rekomendasi</Heading>
        <Text>Beberapa artikel populer yang kami rekomendasikan</Text>
      </VStack>
      <Grid templateColumns="repeat(5, 1fr)" mt="16">
        <GridItem>
          <Text>Hello</Text>
        </GridItem>
        <GridItem>
          <Text>Hello</Text>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default RecommendedArticleSection;
