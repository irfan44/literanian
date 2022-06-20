import {
  Heading,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Spacer,
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
      p="4"
      borderWidth="1px"
      borderRadius="2xl"
      alignItems="start"
    >
      <HStack>
        <Text fontSize="sm" fontWeight="medium">
          {category}
        </Text>
        <Text fontSize="sm">|</Text>
        <Text fontSize="sm">{date}</Text>
      </HStack>
      <Heading size="lg">
        <LinkOverlay as={RouterLink} to={uid ? `/article/${slug}` : "/login"}>
          {title}
        </LinkOverlay>
      </Heading>
      <Text noOfLines={3}>{excerpt}</Text>
      <Spacer />
      <Image src={url} borderRadius="2xl" />
    </VStack>
  );
};

export default ArticleCard;
