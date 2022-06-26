import {
  Badge,
  Heading,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useAppSelector } from "redux/hooks";
import { ArticleData } from "types/article";
import formatDate from "utils/formatDate";

const ArticleCard = ({
  title,
  slug,
  coverImage,
  category,
  createdAt,
  excerpt,
  articleType,
}: ArticleData) => {
  const { url } = coverImage;
  const { uid } = useAppSelector((state) => state.userProfile);

  const date = formatDate(createdAt);
  const articlePremium = articleType === "premium";

  return (
    <VStack
      as={LinkBox}
      alignItems="start"
      bg="white"
      p="6"
      borderRadius="2xl"
      boxShadow="sm"
      _hover={{
        boxShadow: "base",
      }}
    >
      <Image
        src={url}
        borderRadius="2xl"
        alt={title}
        width="100%"
        height="200px"
        objectFit="cover"
        loading="lazy"
      />
      <Heading as="h3" size="lg">
        <LinkOverlay as={RouterLink} to={uid ? `/article/${slug}` : "/login"}>
          {title}
        </LinkOverlay>
      </Heading>
      <HStack>
        <Badge bg="#D6E6F5">{category}</Badge>
        <Text fontSize="sm">|</Text>
        <Text fontSize="sm">{date}</Text>
        {articlePremium && (
          <>
            <Text fontSize="sm">|</Text>
            <Badge mb="2" variant="solid" colorScheme="yellow">
              Premium
            </Badge>
          </>
        )}
      </HStack>
      <Text fontWeight={400} color={"gray.600"} fontSize={"16px"} noOfLines={3}>
        {excerpt}
      </Text>
    </VStack>
  );
};

export default ArticleCard;
