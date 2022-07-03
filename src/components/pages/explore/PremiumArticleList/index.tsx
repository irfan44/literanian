import { InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
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
      <Text fontSize="sm" color="blackAlpha.700">
        Khusus untuk akun premium.
      </Text>
      <Flex>
        <Heading mb="6">{props.title}</Heading>
        <Popover>
          <PopoverTrigger>
            <InfoIcon />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Kumpulkan poin!</PopoverHeader>
            <PopoverBody>
              Dapatkan akun premium ketika poinmu mencapai 5, 20, 50, 80, 100,
              120, 150
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
      {isPremium && (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
          {articleData.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </SimpleGrid>
      )}
      {isNotPremium && (
        <Box as={Center} py="6" bg="#2447F9" color="white" borderRadius="2xl">
          <Text>
            Dapatkan lebih banyak poin untuk buka akses ke artikel premium
          </Text>
        </Box>
      )}
    </Container>
  );
};

export default PremiumArticleList;
