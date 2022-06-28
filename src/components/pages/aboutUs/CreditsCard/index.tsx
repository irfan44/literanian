import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Heading, Link, ListItem, UnorderedList } from "@chakra-ui/react";

const CreditsCard = () => {
  return (
    <Box bg="white" p="5" borderRadius="2xl">
      <Heading size="md" mb="6">
        Kredit
      </Heading>
      <UnorderedList>
        <ListItem>
          Foto oleh berbagai fotografer di{" "}
          <Link
            color="#2447F9"
            fontWeight="bold"
            href="https://www.unsplash.com"
            isExternal
          >
            unsplash.com <ExternalLinkIcon />
          </Link>
        </ListItem>
        <ListItem>
          Ilustrasi di desain oleh{" "}
          <Link
            color="#2447F9"
            fontWeight="bold"
            isExternal
            href="https://www.freepik.com"
          >
            freepik <ExternalLinkIcon />
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default CreditsCard;
