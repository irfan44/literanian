import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const GoalsCard = () => {
  return (
    <Box bg="white" p="5" borderRadius="2xl">
      <Heading size="md" mb="6">
        Tujuan Kami
      </Heading>
      <Text>Tujuan pembuatan produk :</Text>
      <UnorderedList>
        <ListItem>
          Meningkatkan minat baca 10% pengguna dari minimal 100 pengguna
          berdasarkan hasil survei singkat dengan pertanyaan ya/tidak
        </ListItem>
        <ListItem>
          Menampilkan berbagai artikel faktual dan menarik serta menambah
          pengetahuan pengguna.
        </ListItem>
        <ListItem>Meningkatkan frekuensi membaca pengguna.</ListItem>
        <ListItem>
          Meningkatkan ragam bacaan literasi digital yang dibaca pengguna.
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default GoalsCard;
