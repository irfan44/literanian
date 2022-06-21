import { Box } from "@chakra-ui/react";
import CategorySection from "components/pages/home/CategorySection";
import HeroSection from "components/pages/home/HeroSection";
import RecommendedArticleSection from "components/pages/home/RecommendedArticleSection";

const Home = () => {
  return (
    <Box minH="100vh" bg="#f6f8fd">
      <HeroSection />
      <RecommendedArticleSection />
      <CategorySection />
    </Box>
  );
};

export default Home;
