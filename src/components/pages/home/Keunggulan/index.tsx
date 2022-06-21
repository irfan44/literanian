import {
    Center,
    Container,
    Grid,
    GridItem,
    Heading,
    Text,
    VStack,
} from "@chakra-ui/react";

const KeunggulanSection = () => {
    return (
        <Container maxW="6xl" py="16">
            <VStack as={Center}>
                <Heading>Keunggulan</Heading>
                <Text>Kategori artikel yang dapat kamu pilih</Text>
            </VStack>
            <Grid templateColumns="repeat(5, 1fr)" mt="16">
                <GridItem>
                    <Text>Hello</Text>
                </GridItem>
                <GridItem>
                    <Text>Hello</Text>
                </GridItem>
            </Grid>
        </Container>
    );
};

export default KeunggulanSection;