import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import { useAppSelector } from "redux/hooks";
import formatDate from "utils/formatDate";

const UserDashboard = () => {
  const { displayName } = useAppSelector((state) => state.userProfile);
  const { premium, premiumExpiry, points } = useAppSelector(
    (state) => state.userStatus
  );

  const expireDate = premiumExpiry && formatDate(premiumExpiry);

  return (
    <Flex
      as={Container}
      direction={{ base: "column", md: "column", lg: "row" }}
      alignItems="center"
      maxW="6xl"
      py="8"
    >
      <Box
        w={{ base: "100%", md: "100%", lg: "50%" }}
        pr={{ base: "0", md: "0", lg: "6" }}
        py="16"
      >
        <Text fontWeight="medium" fontSize="lg">
          Halo, selamat datang!
        </Text>
        <Heading mb="6">{displayName}</Heading>
        <form>
          <HStack mb="6">
            <Input
              variant="filled"
              placeholder="Cari artikel"
              borderRadius="full"
            />
            <Button>Cari</Button>
          </HStack>
        </form>
        <Stack direction={["column", "row"]}>
          <Stat bg="blue.600" color="white" py="2" px="4" borderRadius="2xl">
            <StatLabel>Total Poin</StatLabel>
            <StatNumber fontSize="lg">{points}</StatNumber>
            <StatHelpText>Target: 100</StatHelpText>
          </Stat>
          <Stat bg="blue.600" color="white" py="2" px="4" borderRadius="2xl">
            <StatLabel>Jenis Akun</StatLabel>
            {premium ? (
              <StatNumber fontSize="lg">Akun Premium</StatNumber>
            ) : (
              <StatNumber fontSize="lg">Akun Reguler</StatNumber>
            )}
            <StatHelpText>Sampai {premium ? expireDate : "-"}</StatHelpText>
          </Stat>
        </Stack>
      </Box>
    </Flex>
  );
};

export default UserDashboard;
