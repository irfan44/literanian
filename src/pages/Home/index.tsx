import { Box } from "@chakra-ui/react";
import CategorySection from "components/pages/home/CategorySection";
import HeroSection from "components/pages/home/HeroSection";

const Home = () => {
  return (
    <Box minH="100vh">
      <HeroSection />
      <CategorySection />
    </Box>
  );
};

export default Home;
