import {
  Center,
  Container,
  Heading,
  Text,
  useColorModeValue,
  VStack,
  Image,
  Stack,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

const KeunggulanSection = () => {
  return (
    <Container maxW="6xl" py="16">
      <VStack as={Center}>
        <Heading>Keunggulan</Heading>
        <Text>Beberapa keuntungan dari kami</Text>
      </VStack>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={6}
        py={12}
        alignItems={"start"}
      >
        <Box
          role={"group"}
          p={6}
          maxH={"300px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"1xl"}
          borderRadius={15}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            borderRadius={500}
            mt={1}
            pos={"relative"}
            height={"100px"}
            _after={{
              borderRadius: "50",
              transition: "all .3s ease",
              content: '""',
              w: "32%",
              h: "90",
              pos: "absolute",
              top: 3,
              left: 0,
              backgroundColor: "blue.200",
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              height={90}
              width={90}
              objectFit={"cover"}
              src={"/images/keunggulan/stopwatch.png"}
              alt="Stopwatch"
            />
          </Box>
          <Stack pt={5} align={"left"}>
            <Text color={"gray.700"} fontSize={"2xl"} fontWeight={900}>
              Akses Seumur Hidup
            </Text>
            <Heading
              color={"gray.600"}
              lineHeight={7}
              fontSize={"16px"}
              fontWeight={400}
            >
              Membaca dan memahami informasi lebih santai tanpa batasan waktu
            </Heading>
            <Stack direction={"row"} align={"center"}></Stack>
          </Stack>
        </Box>

        <Box
          role={"group"}
          p={6}
          maxH={"300px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"1xl"}
          borderRadius={15}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            borderRadius={500}
            mt={1}
            pos={"relative"}
            height={"100px"}
            _after={{
              borderRadius: "50",
              transition: "all .3s ease",
              content: '""',
              w: "32%",
              h: "90",
              pos: "absolute",
              top: 3,
              left: 0,
              backgroundColor: "blue.200",
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              height={90}
              width={90}
              objectFit={"cover"}
              src={"/images/keunggulan/badge.png"}
              alt="Keunggulan"
            />
          </Box>
          <Stack pt={5} align={"left"}>
            <Text color={"gray.700"} fontSize={"2xl"} fontWeight={900}>
              Gratis
            </Text>
            <Heading
              color={"gray.600"}
              lineHeight={7}
              fontSize={"16px"}
              fontWeight={400}
            >
              Bergabung untuk pertama kali dan dapatkan beberapa bacaan gratis
            </Heading>
            <Stack direction={"row"} align={"center"}></Stack>
          </Stack>
        </Box>

        <Box
          role={"group"}
          p={6}
          maxH={"300px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"1xl"}
          borderRadius={15}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            borderRadius={500}
            mt={1}
            pos={"relative"}
            height={"100px"}
            _after={{
              borderRadius: "50",
              transition: "all .3s ease",
              content: '""',
              w: "32%",
              h: "90",
              pos: "absolute",
              top: 3,
              left: 0,
              backgroundColor: "blue.200",
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              height={90}
              width={90}
              objectFit={"cover"}
              src={"/images/keunggulan/strategy.png"}
              alt="Strategi"
            />
          </Box>
          <Stack pt={5} align={"left"}>
            <Text color={"gray.700"} fontSize={"2xl"} fontWeight={900}>
              Pemahaman Baru
            </Text>
            <Heading
              color={"gray.600"}
              lineHeight={7}
              fontSize={"16px"}
              fontWeight={400}
            >
              Mendapatkan pemahaman yang lebih dari sebelumnya
            </Heading>
            <Stack direction={"row"} align={"center"}></Stack>
          </Stack>
        </Box>

        <Box
          role={"group"}
          p={6}
          maxH={"300px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"1xl"}
          borderRadius={15}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            borderRadius={500}
            mt={1}
            pos={"relative"}
            height={"100px"}
            _after={{
              borderRadius: "50",
              transition: "all .3s ease",
              content: '""',
              w: "32%",
              h: "90",
              pos: "absolute",
              top: 3,
              left: 0,
              backgroundColor: "blue.200",
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              height={90}
              width={90}
              objectFit={"cover"}
              src={"/images/keunggulan/puzzle.png"}
              alt="Puzzle"
            />
          </Box>
          <Stack pt={5} align={"left"}>
            <Text color={"gray.700"} fontSize={"2xl"} fontWeight={900}>
              Soal Latihan
            </Text>
            <Heading
              color={"gray.600"}
              lineHeight={7}
              fontSize={"16px"}
              fontWeight={400}
            >
              Membaca dan dapatkan informasi untuk soal latihan yang ada
            </Heading>
            <Stack direction={"row"} align={"center"}></Stack>
          </Stack>
        </Box>

        <Box
          role={"group"}
          p={6}
          maxH={"300px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"1xl"}
          borderRadius={15}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            borderRadius={500}
            mt={1}
            pos={"relative"}
            height={"100px"}
            _after={{
              borderRadius: "50",
              transition: "all .3s ease",
              content: '""',
              w: "32%",
              h: "90",
              pos: "absolute",
              top: 3,
              left: 0,
              backgroundColor: "blue.200",
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              height={90}
              width={90}
              objectFit={"cover"}
              src={"/images/keunggulan/prize.png"}
              alt="Hadiah"
            />
          </Box>
          <Stack pt={5} align={"left"}>
            <Text color={"gray.700"} fontSize={"2xl"} fontWeight={900}>
              Poin
            </Text>
            <Heading
              color={"gray.600"}
              lineHeight={7}
              fontSize={"16px"}
              fontWeight={400}
            >
              Selesaikan kuis dalam artkel dan dapatkan point
            </Heading>
            <Stack direction={"row"} align={"center"}></Stack>
          </Stack>
        </Box>

        <Box
          role={"group"}
          p={6}
          maxH={"300px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"1xl"}
          borderRadius={15}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            borderRadius={500}
            mt={1}
            pos={"relative"}
            height={"100px"}
            _after={{
              borderRadius: "50",
              transition: "all .3s ease",
              content: '""',
              w: "32%",
              h: "90",
              pos: "absolute",
              top: 3,
              left: 0,
              backgroundColor: "blue.200",
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              height={90}
              width={90}
              objectFit={"cover"}
              src={"/images/keunggulan/list.png"}
              alt="Daftar"
            />
          </Box>
          <Stack pt={5} align={"left"}>
            <Text color={"gray.700"} fontSize={"2xl"} fontWeight={900}>
              Desain yang Baik
            </Text>
            <Heading
              color={"gray.600"}
              lineHeight={7}
              fontSize={"16px"}
              fontWeight={400}
            >
              Projek bacaan yang dibangun memiliki konsep desain yang baik
            </Heading>
            <Stack direction={"row"} align={"center"}></Stack>
          </Stack>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default KeunggulanSection;
