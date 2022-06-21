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
}: ArticleData) => {
  const { url } = coverImage;
  const { uid } = useAppSelector((state) => state.userProfile);

  const date = formatDate(createdAt);

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
      <Image src={url} borderRadius="2xl" />
      <Heading as="h3" size="lg">
        <LinkOverlay as={RouterLink} to={uid ? `/article/${slug}` : "/login"}>
          {title}
        </LinkOverlay>
      </Heading>
      <HStack>
        <Badge bg="#D6E6F5">{category}</Badge>
        <Text fontSize="sm">|</Text>
        <Text fontSize="sm">{date}</Text>
      </HStack>
      <Text noOfLines={3}>{excerpt}</Text>
    </VStack>
  );
};

export default ArticleCard;
