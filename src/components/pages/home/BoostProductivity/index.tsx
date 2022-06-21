import {
    Center,
    Container,
    Grid,
    GridItem,
    Heading,
    Text,
    VStack,
} from "@chakra-ui/react";

const BoostProductivitySection = () => {
    return (
        <Container maxW="6xl" py="16">
            <VStack as={Center}>
                <Heading marginBottom={-2}>Metode Membaca Lebih</Heading>
                <Heading>Santai dan Terarah</Heading>
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

export default BoostProductivitySection;