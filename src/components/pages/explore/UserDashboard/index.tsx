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
  StatNumber,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setNewPoints, setNewPremium } from "redux/reducer/userStatusReducer";
import formatDate from "utils/formatDate";
import {
  checkPoints,
  handleAddPoint,
  handleAddPremium,
} from "utils/handleUser";

const UserDashboard = () => {
  const { uid, displayName } = useAppSelector((state) => state.userProfile);
  const { premium, premiumExpiry, points } = useAppSelector(
    (state) => state.userStatus
  );
  const [isClaimable, setIsClaimable] = useState(false);
  const dispatch = useAppDispatch();

  const expireDate = premiumExpiry && formatDate(premiumExpiry);

  const checkingPoints = () => {
    const check = points !== null && checkPoints(points);
    setIsClaimable(check);
  };

  const handleClaimPremium = async () => {
    if (uid !== null && premiumExpiry !== null && points !== null) {
      const newExpiry = await handleAddPremium(uid, premiumExpiry, 5);
      const newPoints = await handleAddPoint(uid, points, 5);
      dispatch(setNewPremium({ premium: true, premiumExpiry: newExpiry }));
      dispatch(setNewPoints(newPoints));
      setIsClaimable(false);
    }
  };

  useEffect(() => {
    checkingPoints();
  }, []);

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
            <StatNumber fontSize="lg">{points}</StatNumber>
            <StatHelpText>Total Poin</StatHelpText>
          </Stat>
          <Stat bg="blue.600" color="white" py="2" px="4" borderRadius="2xl">
            {premium ? (
              <StatNumber fontSize="lg">Akun Premium</StatNumber>
            ) : (
              <StatNumber fontSize="lg">Akun Reguler</StatNumber>
            )}
            <StatHelpText>Sampai {premium ? expireDate : "-"}</StatHelpText>
          </Stat>
        </Stack>
        {isClaimable ? (
          <Button mt="6" onClick={handleClaimPremium}>
            Klaim
          </Button>
        ) : (
          ""
        )}
      </Box>
    </Flex>
  );
};

export default UserDashboard;
