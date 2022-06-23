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
                <Text>Top Featured</Text>
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
                    maxW={"350px"}
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
                        />
                    </Box>
                    <Stack pt={5} align={"left"}>
                        <Text color={"gray.700"} fontSize={"2xl"} fontWeight={900}>
                            Lifetime Access
                        </Text>
                        <Heading
                            color={"gray.600"}
                            lineHeight={7}
                            fontSize={"16px"}
                            fontFamily={"Poppins"}
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
                    maxW={"350px"}
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
                        />
                    </Box>
                    <Stack pt={5} align={"left"}>
                        <Text color={"gray.700"} fontSize={"2xl"} fontWeight={900}>
                            Free
                        </Text>
                        <Heading
                            color={"gray.600"}
                            lineHeight={7}
                            fontSize={"16px"}
                            fontFamily={"Poppins"}
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
                    maxW={"350px"}
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
                        />
                    </Box>
                    <Stack pt={5} align={"left"}>
                        <Text color={"gray.700"} fontSize={"2xl"} fontWeight={900}>
                            Knowledge
                        </Text>
                        <Heading
                            color={"gray.600"}
                            lineHeight={7}
                            fontSize={"16px"}
                            fontFamily={"Poppins"}
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
                    maxW={"350px"}
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
                        />
                    </Box>
                    <Stack pt={5} align={"left"}>
                        <Text color={"gray.700"} fontSize={"2xl"} fontWeight={900}>
                            Practice Questions
                        </Text>
                        <Heading
                            color={"gray.600"}
                            lineHeight={7}
                            fontSize={"16px"}
                            fontFamily={"Poppins"}
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
                    maxW={"350px"}
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
                        />
                    </Box>
                    <Stack pt={5} align={"left"}>
                        <Text color={"gray.700"} fontSize={"2xl"} fontWeight={900}>
                            Points
                        </Text>
                        <Heading
                            color={"gray.600"}
                            lineHeight={7}
                            fontSize={"16px"}
                            fontFamily={"Poppins"}
                            fontWeight={400}
                        >
                            Selesaikan kursus bacaan dan dapatkan point
                        </Heading>
                        <Stack direction={"row"} align={"center"}></Stack>
                    </Stack>
                </Box>

                <Box
                    role={"group"}
                    p={6}
                    maxW={"350px"}
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
                        />
                    </Box>
                    <Stack pt={5} align={"left"}>
                        <Text color={"gray.700"} fontSize={"2xl"} fontWeight={900}>
                            Pixel Matters
                        </Text>
                        <Heading
                            color={"gray.600"}
                            lineHeight={7}
                            fontSize={"16px"}
                            fontFamily={"Poppins"}
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
