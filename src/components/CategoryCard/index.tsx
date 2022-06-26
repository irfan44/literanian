import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Heading,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  title: string;
  slug: string;
  image: string;
  subtitle: string;
}

const CategoryCard = ({ title, slug, image, subtitle }: Props) => {
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
        src={image}
        alt={title}
        width="100%"
        height="200px"
        objectFit="cover"
        borderRadius="2xl"
        loading="lazy"
      />
      <Heading as="h3" size="lg">
        <LinkOverlay as={RouterLink} to={`/category/${slug}`}>
          {title}
        </LinkOverlay>
      </Heading>
      <Text noOfLines={3}>{subtitle}</Text>
      <HStack spacing="1">
        <Text>Lihat</Text>
        <ChevronRightIcon />
      </HStack>
    </VStack>
  );
};

export default CategoryCard;
