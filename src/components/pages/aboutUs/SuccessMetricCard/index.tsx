import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const SuccessMetricCard = () => {
  return (
    <Box bg="white" p="5" borderRadius="2xl">
      <Heading size="md" mb="6">
        Ukuran Kesuksesan
      </Heading>
      <Text>Kriteria kesuksesan dari produk :</Text>
      <UnorderedList>
        <ListItem>
          Mampu mencapai target kami dalam meningkatkan minat baca 10% dari
          minimal 100 pengguna menggunakan metode yang ditentukan untuk mengukur
          keberhasilan
        </ListItem>
        <ListItem>
          Mampu membuat website literasi digital sesuai spesifikasi yang
          ditentukan
        </ListItem>
        <ListItem>Mampu memenuhi tujuan dan target output produk kami</ListItem>
      </UnorderedList>
    </Box>
  );
};

export default SuccessMetricCard;
