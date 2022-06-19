import {
  Badge,
  Flex,
  Heading,
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

const ArticleCard = ({
  title,
  slug,
  coverImage,
  category,
  excerpt,
}: ArticleData) => {
  const { url } = coverImage;
  const { uid } = useAppSelector((state) => state.userProfile);

  return (
    <VStack
      as={LinkBox}
      p="4"
      borderWidth="1px"
      borderRadius="2xl"
      alignItems="start"
    >
      <Flex>
        <Badge>{category}</Badge>
      </Flex>
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
